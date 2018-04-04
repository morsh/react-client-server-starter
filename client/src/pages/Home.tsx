import * as React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="home-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
