import React from 'react'
import NavbarItem from './NavbarItem'
import Cartwidget from './Cartwidget'

const Navbar = (props) => {
  return (
    <nav className={props.className ||"navbar navbar-expand-lg navbar-dark bg-primary"} >
  <div className="container-fluid">
    <p className="navbar-brand text-warning" >{props.navbarLogo}</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <NavbarItem/>
      <NavbarItem/>
      <NavbarItem/>
      <NavbarItem/>
      <Cartwidget/>    
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar