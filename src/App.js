import React, { Component } from 'react';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  render() {
    return <Input />;
  }
}

export default App;
