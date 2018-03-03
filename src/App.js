import React, { Component } from 'react';
import './App.css';
import Fade from './Fade/Fade';

const initialComponents = [1, 2, 3, 4, 5].map(i => {
  return {
    id: i,
    key: i,
    duration: {
      enter: i,
      exit: i
    }
  };
})

class App extends Component {
  constructor(){
    super();
    this.state = {
      components: initialComponents
    };
  }

  remove(id) {
    this.setState({
      components: this.state.components.filter(el => el.id !== id)
    });
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.components.map(el => (
          <Fade {...el} remove={() => this.remove(el.id)} />
        ))}
      </div>
      
    );
  }
}

export default App;
