import React from 'react';
import {Link} from 'react-router-dom'
const CategoryMenu = () => {
    return (
        <div>
            <div id="categorys-menu">
                <div className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/dress">
                        DRESS
                    </Link>
                </div>
                <div className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/casual">
                        CASUAL
                    </Link>
                </div>
                <div className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/popculture">
                        POP CULTURE
                    </Link>
                </div>
                <div className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/funny">
                        FUNNY
                    </Link>
                </div>
                <div className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/athletic">
                        ATHLETIC
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu




//'dress','casual','athletic','popculture','funny'