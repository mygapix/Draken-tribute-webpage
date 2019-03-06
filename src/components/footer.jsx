import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">My React Website About Saab Draken &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
}

export default Footer
