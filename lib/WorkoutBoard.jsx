import React, {Component} from 'react';

import WorkoutList from './WorkoutList';
import AddWorkout from './AddWorkout';

export default class WorkoutBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutList: [
        // {id: 1, title: 'Chest & Triceps'},
        // {id: 2, title: 'Back & Biceps'}
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleSubmit(title) {
    const workoutList = this.state.workoutList.slice();
    const index = workoutList.length + 1;
    workoutList.push({id: index, title: title});
    this.setState({workoutList: workoutList});
  }

  handleTitleChange(index, title) {
    const workoutList = this.state.workoutList.slice();
    const workout = {id: index, title: title};
    workoutList[index - 1] = workout;
    this.setState({workoutList: workoutList});
  }

  render() {
    return (
      <div id='WorkoutBoard'>
        <div className="board-canvas">
          <div className="board">
            <WorkoutList workoutList={this.state.workoutList} onSubmit={this.handleTitleChange} />
            <AddWorkout onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}


