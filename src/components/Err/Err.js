import React from 'react'
import { ReactComponent as ErrSvg } from './err.svg'

const Err = () => {
  return (
    <div className="card border-info col-7 d-flex flex-row m-2" style={{ maxWidth: '55rem' }}>
      <div className="card-body d-flex justify-content-center flex-column text-uppercase">
        <ErrSvg />
      </div>
    </div>
  )
}

export default Err