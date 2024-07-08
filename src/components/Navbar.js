import React from 'react'
import { Link } from 'react-router-dom'
import moon from './moon.png'
import sun from './sun.png'

const Navbar = (props) => {

    const{mode}=props

    let im = moon
    if(mode == 'light')
    {
        im=moon
    }
    else
    {
        im=sun
    }

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg bg-${mode} navbar-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/business">Business</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button type="button" onClick={props.toggle}><img src={im} title="moon icons"/></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;
