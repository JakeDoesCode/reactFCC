import React, { Component } from 'react';


export default class Counter extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('---------------------------');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('Should Component Update No Render');
      console.log('--------------');
      return false;
    }
    console.log('Should Component Update Render');
    console.log('--------------');

    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshot")
    return null;
  }

  render() {
    console.log('render');

  
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('component did update');
    console.log('---------------------');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    console.log('---------------------');
  }

}
