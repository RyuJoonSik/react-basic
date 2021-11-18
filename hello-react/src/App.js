import React, { Component } from 'react';
// import ValidationSample from './ex/ValidationSample';
// import ScrollBox from './ex/ScrollBox';
// import IterationSample from './ex/IterationSample';
import LifeCycleSample from './ex/LifeCycleSample';
import ErrorBoundary from './ex/ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClilck = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClilck}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
