import React from 'react'

export const SideLink = () => {
    return (
        <div className="col-sm-3">
            <div className="m-2">
                <h5><b>Links to other social media</b></h5>
                <p>Look at the below</p>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link " href="#">Twitter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Facebook</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">HTML</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Social Network</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}



