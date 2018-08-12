import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class NavBottom extends Component {
  render() {
    return (
      <div>
        <ul className="site-navigation-bottom">
          <li><a href="/" className="active"><i className="fas fa-home"></i></a></li>
          <li><a href="/"><i className="fas fa-play"></i></a></li>
          <li><a href="/"><i className="fas fa-utensils"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default NavBottom;