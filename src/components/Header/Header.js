import React from 'react'

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center flex-column">
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto text-uppercase font-weight-bold">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Planets <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Starships</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Persons</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
