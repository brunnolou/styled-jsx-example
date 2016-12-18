import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="root">
        <p>Only this paragraph will get the style :D</p>
        <p className="blue">This will be blue</p>
        { /* you can include <Component />s here that include
             other <p>s that don't get unexpected styles! */ }
        <style jsx>{`
          .root {
            display: flex;
            justify-content: space-around;
          }

          p {
            color: red;
          }

          .blue {
            color: blue;
          }
        `}</style>
      </div>
    )
  }
}
