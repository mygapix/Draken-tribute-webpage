/*eslint-env jquery*/
import React, { Component} from 'react';
import "../Pages/gallery2.css";
import "../Pages/gallery.css";
//import "slick-carousel/slick/slick.css"
//import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx';
import Slider from 'react-slick';
import image0 from '../images/0.jpg';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      centerMode: true,
      slidesToShow: 1,
      variableWidth: true,
      focusOnSelect: true,
      swipeToSlide: true,
    };

    return (
      <div>
        <Navbar />
        <Jumbotron title="." subtitle="." />

        <Slider className="carousel"{...settings}>

          <div >
          <img src={image0} alt="."></img>
          </div>
          <div >
          <img src={image1} alt="."></img>
          </div>
          <div >
          <img src={image2} alt="."></img>
          </div>
          <div >
          <img src={image3} alt="."></img>
          </div>
          <div >
          <img src={image4} alt="."></img>
          </div>
          <div >
          <img src={image5} alt="."></img>
          </div>
          <div >
          <img src={image6} alt="."></img>
          </div>
          <div >
          <img src={image7} alt="."></img>
          </div>
          <div >
          <img src={image8} alt="."></img>
          </div>
          <div >
          <img src={image9} alt="."></img>
          </div>

        </Slider>

        <Footer />
      </div>
    );
  }
}


export default SimpleSlider
