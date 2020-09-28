import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center flex-column">
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto text-uppercase font-weight-bold">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/planets">Planets <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sships">Starships</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/persons">Persons</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
