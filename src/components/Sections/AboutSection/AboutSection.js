import React from 'react'
import './AboutSection.css';

function About(props) {
    return (
        <section id="about">
        <div className="container">
          <div className="row about-container">

          <div className="col-lg-5 background order-lg-1 order-1" data-aos="fade-left"></div>

            <div className="col-lg-5 content order-lg-2 order-2" data-aos="fade-left">
              <h2 className="title">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
  
              <div className="icon-box" data-aos="fade-left">
                <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                <h4 className="title"><a href="/#">Lorem ipsum</a></h4>
                <p className="description">Labore excepteur dolore eu Lorem. Incididunt Lorem amet tempor id ad ea non.</p>
              </div>
  
              <div className="icon-box" data-aos-delay="50" data-aos="fade-left">
                <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                <h4 className="title"><a href="/#">Lorem ipsum</a></h4>
                <p className="description">Labore cupidatat mollit qui quis id consequat consectetur. Qui do magna do dolore. Elit pariatur quis proident do duis do voluptate.</p>
              </div>
  
              <div className="icon-box" data-aos-delay="100" data-aos="fade-left">
                <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                <h4 className="title"><a href="/#">Lorem ipsum</a></h4>
                <p className="description">Minim ad labore est consequat tempor occaecat ullamco fugiat labore.Eu cillum sit cillum do sit excepteur elit nisi incididunt.</p>
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    )
}

export default About;

