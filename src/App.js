
import './App.css';

import Navbar from './Components/Navbar';
import News from './Components/News';


import React, { Component } from 'react'

export default class App extends Component {

  //  a = 'Gopal'
  render() {
    return (
<>
 {/* <h1>Hello welcome to {this.a} website</h1> */}

 <Navbar/>
 <News/>

</>
    )
  }
}


