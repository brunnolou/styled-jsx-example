import React, { Component } from 'react';
import Styled from './Styled';

export default class App extends Component {
  render() {
    return (
      <div>
        <Styled />
        <p>This paragraph will not!</p>
      </div>
    )
  }
}
