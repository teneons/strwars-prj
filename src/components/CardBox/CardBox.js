import React, { Component } from 'react'

import SwapiData from '../SwapiData'
import Loader from '../Loader/Loader'
import Err from '../Err/Err'

class CatchError extends Component {
    state = {
        statusErr: false
    }

    catchError = () => {
        this.setState({ statusErr: true, statusLoad: false })
    }

    render() {
        if(this.state.statusErr) {
            return <Err />
        }
        return this.props.children
    }
}

export default class CardBox extends Component {
    state = {
        dataMain: null,
        txtFields: null,
        imgUrl: null,
        statusLoad: true,
        statusErr: false
    }

    componentDidMount() {
        this.getComponentData()
        this.setSystemProps()
    }

    swapiData = new SwapiData()     //init connect

    //processing data
    getComponentData = () => {
        this.props.swapiMethot
            .then(d => this.setState({ dataMain: d }))
            .then(() => this.setState({ statusLoad: false }))
            .catch(this.catchError)
    }

    setSystemProps() {
        this.setState({txtFields: this.props.txtFields})
        this.setState({imgUrl: this.props.imgUrl})
    }

    render() {
        const stlImg = {
            width: '60vh',
            height: '60vh'
        }

        //show loader
        if (this.state.statusLoad) {
            return <Loader />
        }

        return (
            <CatchError>
                <div className="card border-info col-7 d-flex flex-row m-2" style={{ maxWidth: '55rem' }}>
                    <div className="card-body d-flex align-self-center flex-column text-uppercase">
                        <h4 className="card-title font-weight-bold text-center text-info">{this.state.dataMain.name}</h4>
                        <ul className="navbar-nav mr-auto" style={{ fontSize: '3.5vh' }}>
                            <li className="nav-item">
                                <span className="nav-link" href="#">{this.state.txtFields[0]} <span className='font-weight-bold text-info'>{this.state.dataMain.p1}</span></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="#">{this.state.txtFields[1]} <span className='font-weight-bold text-info'>{this.state.dataMain.p2}</span></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="#">{this.state.txtFields[2]} <span className='font-weight-bold text-info'>{this.state.dataMain.p3}</span></span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <img src={`${this.state.imgUrl}${this.state.dataMain.id}.jpg`} className="card-img-top" style={stlImg} alt="Image object"></img>
                    </div>
                </div>
            </CatchError>
        )
    }
}
