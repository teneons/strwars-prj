import React, { Component } from 'react'

import SwapiData from '../SwapiData'

export default class Planets extends Component {
    state = {
        glg: null
    }
    constructor() {
        super();
        this.planetsUpdate();
    }

    swapiData = new SwapiData()
    planetsUpdate () {
        const id = Math.floor(Math.random()*21) +2;

        this.swapiData.getPlanet(id).then(d=> {
            this.setState({
                id: d.id,
                planetName: d.planetName,
                diameter: d.diameter,
                population: d.population,
                orbitalPeriod: d.orbitalPeriod
            })
        })
    }

    render() {
        const stlImg = {
            width: '60vh',
            height: '60vh'
        }

        return (
            <div className="card border-info col-7 d-flex flex-row m-2" style={{ maxWidth: '55rem' }}>
                <div className='col-6'>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${this.state.id}.jpg`} className="card-img-top" style={stlImg} alt="Image planet" />
                </div>
                <div className="card-body d-flex align-self-center flex-column text-uppercase">
                    <h4 className="card-title font-weight-bold text-center text-info">{this.state.planetName}</h4>
                    <ul className="navbar-nav mr-auto" style={{fontSize: '3.5vh'}}>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Diameter: <span className='font-weight-bold text-info'>{this.state.diameter}</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Population: <span className='font-weight-bold text-info'>{this.state.population}</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">Orbital period: <span className='font-weight-bold text-info'>{this.state.orbitalPeriod}</span></span>
                        </li>
                    </ul>
               </div>
            </div>
        )
    }
}