import React, { Component } from 'react'

import SwapiData from '../SwapiData'

export default class Persons extends Component {

    state = {
        dataPersons: null,
        catchEr: false
    }

    swapiData = new SwapiData()
    updatePerson = () => {
        this.swapiData.getAllPeoples()
            .then((d)=> {this.setState({dataPersons: d})})
            .catch(()=> this.setState({catchEr: !this.state.catchEr}))
    }

    componentDidMount () {
        this.updatePerson()
    }

    renderLi = (dataP) => {
        if(dataP) {
        return dataP.map((nameData, id)=>{
                return(
                    <li className="list-group-item list-group-item-action text-info" key={id}>{nameData.personName}</li>
                )
            })
        }
    }

    render() {
        if(this.state.catchEr) {
            return(
                <h3>Error!</h3>
            )
        }

        const li = this.renderLi(this.state.dataPersons)

        return (
            <ul className="list-group col-5 text-center m-2">
                {li}
            </ul>
        )
    }
}
