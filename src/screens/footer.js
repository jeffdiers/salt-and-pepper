import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1 className="logo">salt & pepper</h1>
        <div className="follow">
          <a href="/"><i class="fab fa-instagram"></i></a>
          <div>follow us on instagram</div>
        </div>
      </div>
    );
  }
}

export default Footer;