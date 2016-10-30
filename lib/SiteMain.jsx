import React, {Component} from 'react';

import WorkoutBoard from './WorkoutBoard';
import WorkoutHeader from './WorkoutHeader';

export default class SiteMain extends Component {
  render() {
    return (
      <div id='SiteMain'>
        <WorkoutHeader />
        <WorkoutBoard />
      </div>
    )
  }
}


