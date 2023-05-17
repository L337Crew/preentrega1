import React from 'react'
import {NavLink} from 'react-router-dom'
import Cartwidget from './cartWidget/CartWidget'

const Navbar = (props) => {
  const {navbar_items} = props
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme= "dark">
    <div className="container-fluid ">
      <p className="navbar-brand fs-2 text-warning" href="#">Uz</p>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          {
            navbar_items.map(({path, name}, index) => (
              <li key={index} className="nav-item">
                <NavLink className={'nav-link fs-3'} to={path}>{name}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    <div>
      <Cartwidget/>
    </div>
  </nav>
  )
}

export default Navbar