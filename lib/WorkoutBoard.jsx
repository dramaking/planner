import React, {Component} from 'react';
import LocalStorageMixin from 'react-localstorage';

import WorkoutList from './WorkoutList';
import AddWorkout from './AddWorkout';
import {localState, saveState} from './localStorage';

export default class WorkoutBoard extends Component {
  constructor(props) {
    super(props);
    let workoutList = [];
    // if (localStorage.workoutList) {
    //   workoutList = JSON.parse(localStorage.workoutList);
    // }
    this.state = {
      workoutList: workoutList
      // workoutList: [
      //   // {id: 1, title: 'Chest & Triceps'},
      //   // {id: 2, title: 'Back & Biceps'}
      // ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleWorkoutDelete = this.handleWorkoutDelete.bind(this);
  }

  handleSubmit(title) {
    const workoutList = this.state.workoutList.slice();
    const index = workoutList.length + 1;
    workoutList.push({id: index, title: title});
    this.setState({workoutList: workoutList});

    //localStorage.workoutList = JSON.stringify(workoutList);
  }

  handleTitleChange(index, title) {
    const workoutList = this.state.workoutList.slice();
    const workout = {id: index, title: title};
    workoutList[index - 1] = workout;
    this.setState({workoutList: workoutList});

    //localStorage.workoutList = JSON.stringify(workoutList);
  }

  handleWorkoutDelete(index) {
    const workoutList = this.state.workoutList.slice();
    workoutList.splice(index - 1, 1);
    let workoutItem;
    let count = 1;
    for (workoutItem of workoutList) {
      workoutItem.id = count;
      count++;
    }
    this.setState({workoutList: workoutList});

    //localStorage.workoutList = JSON.stringify(workoutList);
  }

  render() {


    return (
      <div id='WorkoutBoard'>
        <div className="board-canvas">
          <div className="board">
            <WorkoutList workoutList={this.state.workoutList} 
                         onSubmit={this.handleTitleChange}
                         onDelete={this.handleWorkoutDelete} />
            <AddWorkout onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}


