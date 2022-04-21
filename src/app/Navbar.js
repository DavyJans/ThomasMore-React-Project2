import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <a href='#' className="brand-logo">Davy.NU</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/" exact className="nav-link" activeClassName='active'>Overzicht</NavLink></li>
                <li><NavLink to="/add" exact className="nav-link" activeClassName='active'>Artikel toevoegen</NavLink></li>
                <li><NavLink to="/info" exact className="nav-link" activeClassName='active'>App Info</NavLink></li>
              </ul>
              </div>
          </div>
        </nav>
    </>
  )
}

export default NavBar;
