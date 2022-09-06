import React from "react";

function Hero() {
    return (
      <section className="ctn-hero">
          <h1>Css grid practice</h1>
          <div class="container">
            <img src={require('../assets/chef1.jpg')} alt="image1" className="A image-hero"/>
            <img src={require('../assets/chef2.jpg')} alt="image2" className="B image-hero"/>
            <img src={require('../assets/dancer1.jpg')} alt="image3" className="C image-hero"/>
            <img src={require('../assets/dancer2.jpg')} alt="image4" className="D image-hero"/>
            <img src={require('../assets/remo.jpg')} alt="image5" className="E image-hero"/>
            <img src={require('../assets/yoga.jpg')} alt="image6" className="F image-hero"/>
            <img src={require('../assets/singer1.jpg')} alt="image7" className="G image-hero"/>
            <img src={require('../assets/dancer2.jpg')} alt="image8" className="H image-hero"/>
          </div>         
          <h1>React components</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

      </section>

    );
  }
  
  export default Hero;