import React, { Component } from 'react'

import SwapiData from '../SwapiData'
import { buildQueries } from '@testing-library/react';
//import Loader from './Loader'

export default class Planets extends Component {
    state = {
        d: null,
        loadStatus: true,
        catchEr: false
    }
    constructor() {
        super();
        this.planetsUpdate();
    }

    catchError = () => {
        this.setState({catchEr: true, loadStatus: true})
    }

    swapiData = new SwapiData()
    planetsUpdate() {
        const id = Math.floor(Math.random() * 21) + 2;

        this.swapiData.getPlanet(id).then(d => {
            this.setState({
              d: d})
        }).then(()=>console.log(this.state)).then(() => this.setState({ loadStatus: false }))
            .catch(this.catchError)
    }

    render() {
        const stlImg = {
            width: '60vh',
            height: '60vh'
        }

        //show loader
        if (this.state.loadStatus) {
            //<Loader />
            return (
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
                </div>
            )
        }

        //cath error
        if(this.state.catchEr) {
            return <h3>Error loading</h3>
        }

        return (
            <div className="card border-info col-7 d-flex flex-row m-2" style={{ maxWidth: '55rem' }}>
                <div className='col-6'>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${this.state.d.id}.jpg`} className="card-img-top" style={stlImg} alt="Image planet" />
                </div>
                <div className="card-body d-flex align-self-center flex-column text-uppercase">
                    <h4 className="card-title font-weight-bold text-center text-info">{this.state.d.planetName}</h4>
                    <ul className="navbar-nav mr-auto" style={{ fontSize: '3.5vh' }}>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Diameter: <span className='font-weight-bold text-info'>{this.state.d.diameter}</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Population: <span className='font-weight-bold text-info'>{this.state.d.population}</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Orbital period: <span className='font-weight-bold text-info'>{this.state.d.orbitalPeriod}</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}