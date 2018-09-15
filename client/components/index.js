/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Home} from './home'
export {default as AdultSocks} from './adult-socks'
export {default as KidSocks} from './kid-socks'
export {Login, Signup} from './auth-form'
export {SignUpForm} from './signup-form'
export {AccountDetails} from './account-details'
export {NotFound} from './page-not-found'
export {UserDropdown} from './user-dropdown'
export {CategoryMenu} from './category-menu'
export {CategorySocks} from './category-socks'
export {OrderButton} from './order-button'
export {PageNotFound} from './page-not-found'
export {SingleSock} from './single-sock'
export {SockList} from './sock-list'
