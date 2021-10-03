import React from 'react'

export const Search = () => {
    return (
        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
        <div className="navbar-nav">
            <form className="form-inline nav-item">
                <input className="form-control mr-sm-2" type="text" placeholder="Search for post" />
                <button className="btn btn-success" type="submit">Search</button>
            </form>
        </div>
        </div>
    )
}
