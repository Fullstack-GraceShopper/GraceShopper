import React from 'react';
import {Link} from 'react-router-dom'
const CategoryMenu = (props) => {
    // OB: could loop over an array [{name: 'dress'}, ...] and render each element using .map
    // OB: AND you could take that array and define it as universal (usable front- or backend) utility, then you'd ipmort it here AND import it over in your sequelize model and use it to validate category inputs
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