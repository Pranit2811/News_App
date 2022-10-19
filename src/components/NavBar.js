import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
    <nav className={`navbar navbar-expand-lg bg-${this.props.mode} navbar-${this.props.mode} text-${this.props.text}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
       
      </ul>
    
      <div className="form-check form-switch d-flex">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
   <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: this.props.mode === 'dark' ? 'white':'black'}}> Switch to {this.props.text}</label>
</div>
    </div>
  </div>
</nav>




       
      </div>
    )
  }
}

export default NavBar