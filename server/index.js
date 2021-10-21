const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db')
const sessionStore = new SequelizeStore({db})

const webpack = require('webpack')
const middleware = require('webpack-dev-middleware') //webpack hot reloading middleware
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)
const cors = require('cors')

const app = express()
module.exports = app

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== 'production') require('../secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const createApp = () => {
  app.use(require('webpack-hot-middleware')(compiler, {
    'log': false, 
    'path': '/__webpack_hmr', 
    'heartbeat': 10 * 1000
  }))

  app.use(middleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }))

  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  // compression middleware
  app.use(compression())

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  // app.use(cors({
  //   credentials: true,
  //   origin: ['https://localhost:4566', 'https://m.stripe.network', 'http://m.stripe.network', 'https://sockr.herokuapp.com', 'http://sockr.herokuapp.com', 'https://m.stripe.network/inner.html#referrer=http%3A%2F%2Flocalhost%3A4566%2Fcart&title=Stripe%20Checkout&url=https%3A%2F%2Fcheckout.stripe.com%2Fm%2Fv3%2Findex-3f0dc197837628f45156bf4f7ed0f6ad.html%3Fdistinct_id%3D39172807-bd66-9329-9e48-4e932ef6edb6&muid=9eafe779-ce29-4aad-85e1-11cb1d0cbeb4&sid=a82170dc-8891-4ab1-96e5-77dc0a7cd246&preview=false&', 'https://m.stripe.com/4']
  // }))

  // app.options('*', cors())

  // auth and api routes
  app.use('/auth', require('./auth'))
  app.use('/api', require('./api'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const PORT = process.env.PORT || 4566

  const options = {
    key: fs.readFileSync(path.join(__dirname, './ssl/localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, './ssl/localhost.crt')),
  }

  const server = https.createServer(options, app).listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )
}

const syncDb = () => db.sync()

async function bootApp() {
  try {
    await sessionStore.sync()
    await syncDb()
    await createApp()
    await startListening()    
  } catch(err) {
    console.error(err)
  }
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (process.env.NODE_ENV !== 'test') {
  bootApp()
} else {
  createApp()
}
