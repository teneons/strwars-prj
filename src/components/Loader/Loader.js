import React from 'react'
import {ReactComponent as LoadSVG} from './ldr.svg'

const Loader = () => {
    return (
        <div className="card border-info col-7 d-flex flex-row m-2" style={{ maxWidth: '55rem' }}>
            <div className="card-body d-flex justify-content-center flex-column text-uppercase">
                <LoadSVG />
            </div>
        </div>
    )
}

export default Loader