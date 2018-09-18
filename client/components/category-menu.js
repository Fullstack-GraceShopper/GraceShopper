import React from 'react';
import {Link} from 'react-router-dom'
import {categoryArr} from './utils'
console.log('cat:   ', categoryArr)

const CategoryMenu = (props) => {
  return (
    <div>
      <div id="categorys-menu">
      {categoryArr.map(category => {
        let name = category.name
        return (
          <div onClick={() => props.onClick(`${name}`)} className="category-menu-item hover-light" key={name}>
            <Link className="no-decoration white" to={`/socks/category/${name}`}>
                {name}
            </Link>
          </div>
        )  
      })}
      </div>
    </div>
  )
}

export default CategoryMenu