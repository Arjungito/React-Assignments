import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
      render() {
            return (
                  <div>
                        <nav className="navbar navbar-expand-lg navbar-light">
                              <Link to="/LOGO" className="navbar-brand" >Amebo</Link>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                          <li className="nav-item active">
                                          <Link to ="/home" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                                          </li>
                                          <li className="nav-item">
                                          < Link to="/aboutus" className="nav-link">AboutUs</Link>
                                          </li>
                                          <li className="nav-item">
                                          <Link to="/contactus" className="nav-link" >ContactUs</Link>
                                          </li>
                                          <li className="nav-item">
                                          <Link to="/blog"  className="nav-link" >Blog</Link>
                                          </li>
                                    </ul>
                              </div>
                        </nav>
                  </div>
            )
      }
}

export default Navbar
