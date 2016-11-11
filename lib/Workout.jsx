import React, {Component} from 'react';

import WorkoutTitle from './WorkoutTitle';
import ExerciseList from './ExerciseList';
import AddExercise from './AddExercise';

export default class Workout extends Component {
  constructor(props) {
    super(props);
    const exerciseListName = "exerciseList" + this.props.index;
    let exerciseList = [];
    if (localStorage.getItem(exerciseListName)) {
      exerciseList = JSON.parse(localStorage.getItem(exerciseListName));
    }
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
    this.handleExerciseFinish = this.handleExerciseFinish.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
    this.handleExerciseDelete = this.handleExerciseDelete.bind(this);
  }

  addNewExercise() {
    const exerciseList = this.state.exerciseList.slice();
    const index = exerciseList.length + 1;
    exerciseList.push({id: index, 
                       title: this.state.newTitle, 
                       set: this.state.newSet,
                       exerciseHistory: [],
                       notes: 'Click to edit your notes here' });
    this.setState({exerciseList: exerciseList});

    const exerciseListName = "exerciseList" + this.props.index;
    localStorage.setItem(exerciseListName, JSON.stringify(exerciseList));
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

  handleExerciseChange(index, title, set) {
    const exerciseList = this.state.exerciseList.slice();
    exerciseList[index - 1].title = title;
    exerciseList[index - 1].set = set;
    this.setState({exerciseList: exerciseList});

    const exerciseListName = "exerciseList" + this.props.index;
    localStorage.setItem(exerciseListName, JSON.stringify(exerciseList));
  }

  handleExerciseDelete(index) {
    const exerciseList = this.state.exerciseList.slice();
    exerciseList.splice(index - 1, 1);
    let exerciseItem;
    let count = 1;
    for (exerciseItem of exerciseList) {
      exerciseItem.id = count;
      count++;
    }
    this.setState({exerciseList: exerciseList});
  }

  handleExerciseFinish(index, setList) {
    const exerciseList = this.state.exerciseList.slice();
    exerciseList[index - 1].exerciseHistory = setList;
    this.setState({exerciseList: exerciseList});

    const exerciseListName = "exerciseList" + this.props.index;
    localStorage.setItem(exerciseListName, JSON.stringify(exerciseList));
  }

  handleNotesChange(index, notes) {
    const exerciseList = this.state.exerciseList.slice();
    exerciseList[index - 1].notes = notes;
    this.setState({exerciseList: exerciseList});

    const exerciseListName = "exerciseList" + this.props.index;
    localStorage.setItem(exerciseListName, JSON.stringify(exerciseList));
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
                      index={this.props.index}
                      onExerciseFinish={this.handleExerciseFinish}
                      onNotesChange = {this.handleNotesChange}
                      onExerciseChange={this.handleExerciseChange}
                      onExerciseDelete={this.handleExerciseDelete} />

        <AddExercise title={this.state.newTitle}
                     set={this.state.newSet}
                     onTitleChange={this.handleTitleChange}
                     onSetChange={this.handleSetChange}
                     onSubmit={this.handleSubmit} />
      </div>
    )
  }
}