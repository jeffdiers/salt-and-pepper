import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div  className="logo">
          <Link to="/"><h1>salt & pepper</h1></Link>
        </div>
        <div className="header-container">
          <div>
            <ul className="site-navigation">
              <li><Link to="/"><i className="fas fa-home"></i><span>home</span></Link></li>
              <li><a href="/"><i className="fas fa-play"></i><span>videos</span></a></li>
              <li><a href="/"><i className="fas fa-utensils"></i><span>recipes</span></a></li>
            </ul>
          </div>
          <div>
            <ul className="search">
              <li><a href="/"><i className="fas fa-search"></i><span>search</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;