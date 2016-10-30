import React, {Component} from 'react';

export default class WorkoutTitle extends Component {
  render() {
    return (
      <div id='WorkoutTitle'>
        <h5>{this.props.title}</h5>
      </div>
    )
  }
}