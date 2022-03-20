import React, { Component, useState } from 'react';
import Editable from './components/Editable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }
  render() {
    return (
      <Editable text={this.state.task} placeholder="Enter here" type="input">
        <input
          type="text"
          name="task"
          placeholder="Enter here"
          value={this.state.task}
          onChange={(e) => this.setState({ task: e.target.value })}
        />
      </Editable>
    );
  }
}

export default App;
