import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js'; // Particles j-Query plagin
//import {Particles} from './Particles';
import './App.css';

 const particlesOptions = 
    {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 600
            }
          },
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
          },
        },
      }


class App extends Component{
  render(){
    return(
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
      </div>
    )
  }
}

export default App;
