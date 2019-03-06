import React, { Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="This website is dedicated to the most beautiful jet fighter ever made." />
        <div className="container">
          <h2>.</h2>
          <p>

          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home
