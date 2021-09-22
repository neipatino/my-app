
import React, {component} from 'react';
import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor (props){
    super(props)

    this.state = {
      textoButton: true, 
      button: true, 
      color: "silver blue",
    };

  
     
    this.Botton = this.Botton.bind(this);

    this.manejoBotton = this.manejoBotton.bind(this);

  };

  Botton(){
    this.setState(state => ({
      button: !this.state.button
    }));
  }


  manejoBotton(){
    this.setState(start => ({
      textoBotton: !this.state.textoBotton
    }));
  };



  render(){
    return(
      <div className="App">
        <h3>Hola Mundo</h3>
        <button onClick={this.manejoBotton}>
          {this.state.texteBotton ? "ON" : "OFF" }
        </button>
        <button onClick={this.Botton}>
          cambiar mensaje
        </button>
        <h3>{this.state.button ?  " firts message" :  "second message"}</h3>
      </div>
    );
  };
};


export default App;
 