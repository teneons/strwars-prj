import React, { Component } from 'react'

import SwapiData from '../SwapiData'
import Loader from '../Loader/Loader'

export default class Starships extends Component {
    state = {
        dataSShips: null,
        statusLoad: true,
        statusErr: false,
    }

    constructor() {
        super();
        this.starShipsGetData();
    }

    swapiGetData = new SwapiData()  //init connect
    //star ship func.
    starShipsGetData = () => {
        const id = Math.floor(Math.random() * 21) + 2;  //gener id

        this.SwapiData.getStarship(id)
            .then(d => this.setState({dataSShips: d}))
            .then(()=> this.setState({statusLoad: false}))
            .catch(this.catchError)
    }

    //prosessing error
    catchError = () => {
        this.setState({statusErr: true, statusLoad: false})
    }

    render() {
        const stlImg = {
            width: '60vh',
            height: '60vh'
        }

        //show loader
        if(this.state.statusLoad) {
            return <Loader />
        }
        //show error
        if(this.state.statusErr) {
            return <h3>ERROR</h3>
        }

        return (
            <div className="card border-info col-7 d-flex flex-row m-2" style={{ maxWidth: '55rem' }}>
                <div className="card-body d-flex align-self-center flex-column text-uppercase">
                    <h4 className="card-title font-weight-bold text-center text-info">Name ship</h4>
                    <ul className="navbar-nav mr-auto" style={{fontSize: '3.5vh'}}>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Model: <span className='font-weight-bold text-info'>42</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Length: <span className='font-weight-bold text-info'>42</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Passengers: <span className='font-weight-bold text-info'>42</span></span>
                        </li>
                    </ul>
               </div>
               <div className='col-6'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="card-img-top" style={stlImg} alt="Image planet"></img>
                </div>
            </div>
        )
    }
}