import React, {Component} from 'react';

import Workout from './Workout';

export default class WorkoutList extends Component {
  render() {
    const workoutList = this.props.workoutList;
    const onSubmit = this.props.onSubmit;

    const listItems = workoutList.map((workout) =>
      <Workout key={workout.id}
               title={workout.title}
               onSubmit={onSubmit}
               index={workout.id} />
    );

    return (
      <div id='WorkoutList'>
        {listItems}
      </div>
    )
  }
}