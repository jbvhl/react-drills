import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image myImage={'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg'} />
      </div>
    );
  }
}

export default App;
