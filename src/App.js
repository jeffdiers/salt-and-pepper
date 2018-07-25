import React, { Component } from 'react';
import './App.css';
import Header from './screens/header.js'
import Home from './screens/home.js'
import Footer from './screens/footer.js'
import Article from './screens/article.js'
import NavBottom from './screens/navBottom.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/article/:slug" component={Article} exact />
          {/* <Footer /> */}
          <NavBottom />
        </div>
      </Router>
    );
  }
}

export default App;
