
import { Search } from "./Search"
import { NewProfile } from "./NewProfile"
import { Profiles } from "./Profiles"
export const Navbar = ({profiles, addProfile, changeProfile, login, show, setShow}) => {
    //let n = name.length === 0 ? null : name[0]["comment"][0]["id"] 
    let addPostButton = show ? 'Close' : 'AddPost'
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                {/*<!-- Brand stay on left and does not collapes -->*/}
                <a className="navbar-brand mr-3" href="#">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
                        width="30" height="30" alt="logo" />
                    The Social Network 
                </a>
                {/*<!-- collapse button -->*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*<!-- collapse item left-->*/}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item" onClick = {() => {login.login ? setShow(!show): setShow(false)}}>
                            <a className="nav-link" href="#">{addPostButton}</a>
                        </li>
                    </ul>
                </div>



                {/*collapse item center*/}
                <Search />
                {/*<!-- collapse item  right with dropdown-->*/}
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown mr-4">
                            <a className="dropdown-toggle nav-link" href='#' role="button" data-toggle="dropdown">
                                <img src= {login.img}
                                    width="40" height="40" className="rounded-circle" /> {login.name}
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Dashboard</a>
                                <a className="dropdown-item" href="#">Profile</a>
                                <a className="dropdown-item" href="#">Log Out</a><hr />
                                <Profiles profiles = {profiles} changeProfile = {changeProfile}/>
                                <hr />
                                <NewProfile addProfile = {addProfile}/>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}
