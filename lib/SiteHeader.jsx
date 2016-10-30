import React, {Component} from 'react';


export default class SiteHeader extends Component {
  render() {
    return (
      <div id='SiteHeader'>
        <nav className="header">
          <a className="header-logo" href="./">
            <img src="./img/logo.png" alt="logo" />
          </a>
        </nav>
      </div>
    )
  }
}


