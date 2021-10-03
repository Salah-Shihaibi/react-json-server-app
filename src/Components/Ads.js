import { useState } from 'react'

export const Ads = ({deleteProfile}) => {
    
    return (
        <div className="col-sm-3">
        <div className="card card-body bg-light m-2">
            <button type="submit" className="btn btn-danger btn-sm " onDoubleClick = {()=>deleteProfile()}>Delete User ?</button>
        </div>
        <div className="card card-body bg-light m-2">
            <p>ADS</p>
        </div>
        <div className="card card-body bg-light m-2">
            <p>ADS</p>
        </div>
    </div>
    )
}
