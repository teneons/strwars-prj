import React, { Component } from 'react'

import SwapiData from '../SwapiData'

export default class Persons extends Component {

    state = {
        dataPersons: null,
        catchEr: false
    }

    componentDidMount () {
        this.updatePerson()
    }

    swapiData = new SwapiData()
    updatePerson = () => {

        this.swapiData.getAllPeoples()
        .then((d)=> console.log(d))
            //.then((d)=> {this.setState({dataPersons: d.peopleName})})
            .catch(()=> this.setState({catchEr: !this.state.catchEr}))
    }


    renderLi = (dataP) => {
        return dataP.map((name)=>{
            return(
                <li className="list-group-item list-group-item-action text-info">{name}</li>
            )
        })
    }

    render() {

        if(this.state.catchEr) {
            return(
                <h3>Error!</h3>
            )
        }

        return (
            <ul className="list-group col-5 text-center m-2">
                {this.renderLi}
            </ul>
        )
    }
}
