import React from 'react'
import {Link} from 'react-router-dom'
import {categoryArr} from './utils'

const CategoryMenu = props => {
  return (
    <div>
      <div id="categorys-menu">
        {categoryArr.map(category => {
          let name = category.name
          return (
            <Link
              key={name}
              className="no-decoration white"
              to={`/socks/category/${name}`}
            >
              <div
                onClick={() => props.onClick(`${name}`)}
                className="category-menu-item hover-light"
                key={name}
              >
                {name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryMenu
