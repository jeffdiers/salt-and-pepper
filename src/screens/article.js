import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Article extends Component {

  render() {
    const { slug } = this.props.match.params
    return (
      <div className="home container">
        {slug}
      </div>
    );
  }
}

export default Article;