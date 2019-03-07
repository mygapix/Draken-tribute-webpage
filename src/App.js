import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/about.jsx'
import Gallery from './Pages/gallery.jsx'
import Comments from './Pages/comments.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/comments" component={Comments}/>
          <Route path={process.env.PUBLIC_URL + '/'}>
        </div>
      </Router>
    );
  }
}

export default App;
