import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/saab-logo.jpg';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-invert">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
        <img className="navbar-img" src={logo} alt="."></img>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comments">Comments</Link>
            </li>
            </ul>
        </div>
      </div>
     </nav>
    );
  }
}

export default Navbar
