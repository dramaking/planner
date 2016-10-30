import React, {Component} from 'react';

export default class Exercise extends Component {
  render() {
    return (
      <div className='exercise'>
        <div className="exercise-container">
          <a className="exercise-details" href="#">
            <div className="exercise-title">
              <p>{this.props.title}</p>
            </div>
            <div className="exercise-set">
              <p>{this.props.set} <small>Set</small></p>
            </div>
          </a>
        </div>
      </div>
    )
  }
}


