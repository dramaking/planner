import React, {Component} from 'react';

import WorkoutHeaderForm from './WorkoutHeaderForm';

function WorkoutHeaderText(props) {
  return (
      <div className='workout-header-title' onClick={props.onClick}>
        <h4>{props.title}</h4>
      </div>
  );
}

export default class WorkoutHeader extends Component {
  constructor(props) {
    super(props);
    let workoutTitle = 'Click to name your workout plan';
    if (localStorage.workoutTitle) {
      workoutTitle = JSON.parse(localStorage.workoutTitle);
    }
    this.state = {
      showForm: false,
      title: workoutTitle,
    };
    this.handleTextClick = this.handleTextClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleTextClick = () => {
    this.setState({showForm: true});
  } 

  handleFormClick = () => {
    this.setState({showForm: false});
  }

  handleTitleChange = (title) => {
    this.setState({title: title});

    localStorage.workoutTitle = JSON.stringify(title);
  }

  render() {
    const showForm = this.state.showForm;

    let content = null;

    if (!showForm) {
      content = <WorkoutHeaderText onClick={this.handleTextClick} title={this.state.title} />;
    } else {
      content = <WorkoutHeaderForm onClick={this.handleFormClick} 
                                   onSubmit={this.handleTitleChange} />;
    }

    return (
      <div id='WorkoutHeader'>
        {content}
      </div>
    );
  }
}