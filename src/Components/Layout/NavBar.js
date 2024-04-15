import React from 'react'
import {NavLink} from 'react-router-dom' 


function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div classNameName="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active"  to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/User/Add">Add User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/User/show">Show</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar