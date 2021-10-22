import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import News from './Components/News';


// news apo key 49d4bd81b05d48f49eb3ba1ba553cd7f
export default class App extends Component {
  
  render() {
    return (
      <>
      <Navbar />
      <News />
      </>
    )
  }
}
