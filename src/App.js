import React, { Component } from 'react';
import Nav from './comps/nav/Nav';
import Logo from './comps/logo/Logo';
import ImageLinkForm from './comps/form/Form';
import Rank from './comps/rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecog from './comps/face/FaceRecog';

const particlesParams = {
  particles: {
    number: {
      value: 76,
      density: { enable: true, value_area: 4024.6529723245903 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 7 },
      image: { src: "https://image.flaticon.com/icons/svg/1719/1719687.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 60,
      random: true,
      anim: { enable: false, speed: 10, size_min: 1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.6 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
}

const app = new Clarifai.App({
 apiKey: '75e30b4dfc1747aba24771de6c945ccf'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({imgUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
      // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesParams} className="particles"/>
        <Nav />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
        <FaceRecog imgUrl={this.state.imgUrl}/>
      </div>
    );
  }
}

export default App;
