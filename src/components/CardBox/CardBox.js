import React, { Component } from 'react'

import SwapiData from '../SwapiData'
import Loader from '../Loader/Loader'

export default class CardBox extends Component {
    state = {
        dataMain: null,
        txtFields: null,
        imgUrl: null,
        statusLoad: true,
        statusErr: false
    }
    
    constructor() {
        super()
        this.getsComponentData()
    }

    swapiData = new SwapiData()     //init connect

    //processing data
    getsComponentData = () => {
        const id = Math.floor(Math.random() * 21) + 2;  //gener id

        this.swapiData.getStarship(id)
            .then(d => this.setState({dataMain: d}))
            .then(()=> this.setState({statusLoad: false}))
            .catch(this.catchError)
    }

    //processing error
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
                        <h4 className="card-title font-weight-bold text-center text-info">{this.state.dataMain.name}</h4>
                    <ul className="navbar-nav mr-auto" style={{fontSize: '3.5vh'}}>
                        <li className="nav-item">
                            <span className="nav-link" href="#">{this.state.txtFields[0]}: <span className='font-weight-bold text-info'>{this.state.dataMain.p1}</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">{this.state.txtFields[1]}: <span className='font-weight-bold text-info'>{this.state.dataMain.p2}</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="#">{this.state.txtFields[2]}: <span className='font-weight-bold text-info'>{this.state.dataMain.p3}</span></span>
                        </li>
                    </ul>
               </div>
               <div className='col-6'>
                    <img src={`${this.state.imgUrl}${this.state.dataMain.id}.jpg`} className="card-img-top" style={stlImg} alt="Image object"></img>
                </div>
            </div>
        )
    }
}
