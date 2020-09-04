import React from 'react'

import SwapiData from '../SwapiData'
import CardBox from '../CardBox/CardBox'

function Planets () {
    const swapiD = new SwapiData()
    const id = Math.floor(Math.random() * 21) + 2;  //gener id

    return <CardBox swapiMethot={swapiD.getPlanet(id)} txtFields={['Diameter:', 'Population:', 'Orbital period:']} imgUrl={'https://starwars-visualguide.com/assets/img/planets/'} />
}

export default Planets