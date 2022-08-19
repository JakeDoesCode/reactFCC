import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp:0,
      seed:30
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });

    this.ignoreProp=() => this.setState({ignoreProp:Math.random()})
    this.seedGen=() => this.setState({seed:Number.parseInt(Math.random()*100)})
  }
 
  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        <button onClick={this.ignoreProp} >Ignore Prop</button>
        <button onClick={this.seedGen} >Seed Gen</button>

        {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed}/>: null} 
      </div>
    );
  }
}
