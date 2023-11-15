import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
   <>



<nav className={`navbar navbar-expand-lg text-${props.mode==='light'?'dark':'light'} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='info'?'dark':'light'}` } to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link className={`nav-link active text-${props.mode==='info'?'dark':'light'}`}  aria-current="page" to="/">{props.Hometext}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='info'?'dark':'light'}`} to="/about">About</Link>
        </li>  
      </ul>

        <div className={`form-check form-switch text-${props.mode==='info'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='info'?'Enable Dark Mode':'Enable Light Mode'}</label>
        </div>

    </div>
  </div>
</nav>


   </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    Hometext: PropTypes.string.isRequired

}
