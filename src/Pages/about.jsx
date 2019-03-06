import React, { Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx';
import './about.css';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title=". " subtitle=" ." />
        <div className="container">
          <h2 >History</h2>
          <p >
            The Saab 35 Draken is a Swedish fighter aircraft developed and manufactured by Saab between 1955 and 1974.
            It was the first fully supersonic aircraft to be deployed in Western Europe.
            The Draken was developed during the 1940s and 1950s to replace Sweden's first generation of jet-powered fighter
            aircraft, the Saab J 29 Tunnan and, later, the fighter variant (J 32B) of the Saab 32 Lansen. It featured an
            innovative double delta wing; in order to test this previously-unexplored aerodynamic feature, a sub-scale test
            aircraft, the Saab 210, was produced and flown. Developed in Sweden, the Draken was introduced into service with
            the Swedish Air Force (SAF) on 8 March 1960. Early models were intended purely to perform air defence missions,
            the type being considered to be a capable dogfighter for the era.<br></br><br></br>

            The Draken functioned as an effective supersonic fighter aircraft of the Cold War period. In Swedish service,
            it underwent several upgrades, the ultimate of these being the J 35J model. By the 1980s, the SAF's Drakens had
            largely been replaced by the more advanced Saab 37 Viggen fighter, while the introduction of the more capable
            Saab JAS 39 Gripen fighter was expected in service within a decade, although delayed. As a consequence of
            cutbacks and high maintenance costs, the SAF opted to retire the Draken during December 1999. The type was also
            exported to Austria, Denmark, Finland, and the United States; the last operated the type as a training aircraft
            for test pilots.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About
