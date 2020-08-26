import React from 'react'

const Loader = () => {
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
        </div>
    )
}

export default Loader