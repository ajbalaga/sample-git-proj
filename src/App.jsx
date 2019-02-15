import React, { Component } from 'react';
import './App.css';
import Header from "./component/header";
import Footer from "./component/footer";
import Body from "./component/body";
import {getUserList} from './util/service-helper';

class App extends Component {

  
  
  render() {
    
    return (
        <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        </div>
      
    );
  }
}

export default App;
