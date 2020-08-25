import React, { Component } from 'react'

export default class Persons extends Component {
    render() {
        return (
            <ul className="list-group col-5 text-center m-2">
                <li className="list-group-item list-group-item-action text-info">1</li>
                <li className="list-group-item list-group-item-action text-info">2</li>
                <li className="list-group-item list-group-item-action text-info">3</li>
            </ul>
        )
    }
}
