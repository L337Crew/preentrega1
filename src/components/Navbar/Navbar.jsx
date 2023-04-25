import React from 'react'
import NavbarItem from './navbarItems/NavbarItem'
import Cartwidget from './cartWidget/CartWidget'


const Navbar = (props) => {
  return (
    <nav className={props.className ||"navbar navbar-expand-lg navbar-dark bg-primary"} >
  <div className="container-fluid ">
    <p className="navbar-brand text-warning" >{props.navbarLogo}</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className="navbar-nav"> 
        {props.items?.map((texto, index) => (
          <NavbarItem key={index} texto={texto} />
        ))}    
      </ul>
      <div className='ml-auto'><Cartwidget/></div>
    </div>
  </div>
</nav>
  )
}

export default Navbar