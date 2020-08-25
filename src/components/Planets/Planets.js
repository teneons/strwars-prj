import React, { Component } from 'react'

export default class Planets extends Component {

    render() {

        const stlImg = {
            width: '60vh',
            height: '60vh'
        }

        return (
            <div className="card border-info col-7 d-flex flex-row" style={{ maxWidth: '55rem' }}>
                <div className='col-6'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="card-img-top" style={stlImg} alt="Image planet"></img>
                </div>
                <div className="card-body d-flex align-self-center flex-column text-uppercase">
                    <h4 className="card-title font-weight-bold text-center text-info">Name planet</h4>
                    <ul className="navbar-nav mr-auto" style={{fontSize: '3.5vh'}}>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Diameter: <span className='font-weight-bold text-info'>42</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Population: <span className='font-weight-bold text-info'>42</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Rotation period: <span className='font-weight-bold text-info'>42</span></span>
                        </li>
                    </ul>
               </div>
            </div>
        )
    }
}