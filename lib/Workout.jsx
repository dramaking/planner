import React, {Component} from 'react';

import WorkoutTitle from './WorkoutTitle';
import ExerciseList from './ExerciseList';
import AddExercise from './AddExercise';

export default class Workout extends Component {
  constructor(props) {
    super(props);
    // const exerciseListName = "exerciseList" + this.props.index;
    // console.log(exerciseListName);
    let exerciseList = [];
    // if (localStorage.getItem(exerciseListName)) {
    //   exerciseList = JSON.parse(localStorage.getItem(exerciseListName));
    // }
    this.state = {
      exerciseList: exerciseList,
      // exerciseList: [
      //   // {id: 1, title: 'Barbell Incline Bench Press', set: 5},
      //   // {id: 2, title: 'Barbell Flat Bench Press', set: 4}
      // ],
      newTitle: '',
      newSet: null,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSetChange = this.handleSetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNewExercise() {
    const exerciseList = this.state.exerciseList.slice();
    const index = exerciseList.length + 1;
    exerciseList.push({id: index, 
                       title: this.state.newTitle, 
                       set: this.state.newSet,
                       setListHistory: [] });
    this.setState({exerciseList: exerciseList});

    // const exerciseListName = "exerciseList" + this.props.index;
    // console.log(exerciseListName);
    // localStorage.setItem(exerciseListName, JSON.stringify(exerciseList));
  }

  handleTitleChange(title) {
    this.setState({newTitle: title});
  }

  handleSetChange(set) {
    this.setState({newSet: set});
  }

  handleSubmit() {
    this.addNewExercise();
    this.setState({newTitle: '', newSet: null,});
  }

  render() {

    const onSubmit = this.props.onSubmit;
    const onDelete = this.props.onDelete;

    return (
      <div id='Workout'>
        <WorkoutTitle title={this.props.title}
                      onTitleSubmit={onSubmit}
                      onDelete={onDelete}
                      index={this.props.index} />

        <ExerciseList exerciseList={this.state.exerciseList}
                      index={this.props.index} />

        <AddExercise title={this.state.newTitle}
                     set={this.state.newSet}
                     onTitleChange={this.handleTitleChange}
                     onSetChange={this.handleSetChange}
                     onSubmit={this.handleSubmit} />
      </div>
    )
  }
}