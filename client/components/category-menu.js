import React from 'react';
import {Link} from 'react-router-dom'
const CategoryMenu = (props) => {

    return (
        <div>
            <div id="categorys-menu">
                <div onClick={() => props.onClick('dress')} className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/dress">
                        DRESS
                    </Link>
                </div>
                <div onClick={() => props.onClick('casual')} className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/casual">
                        CASUAL
                    </Link>
                </div>
                <div onClick={() => props.onClick('popculture')} className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/popculture">
                        POP CULTURE
                    </Link>
                </div>
                <div onClick={() => props.onClick('funny')} className="category-menu-item hover-light">
                    <Link className="no-decoration white" to="/socks/category/funny">
                        FUNNY
                    </Link>
                </div>
                <div onClick={() => props.onClick('athletic')} className="category-menu-item hover-light">
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