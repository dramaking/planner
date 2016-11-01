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
    this.state = {
      showForm: false,
      title: 'Zicheng\'s Workout Plan',
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