import React, {Component} from 'react';
import {render} from 'react-dom';
import SiteHeader from './SiteHeader';
import SiteMain from './SiteMain';

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        <SiteHeader /> 
        <SiteMain />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
