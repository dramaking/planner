import React, {Component} from 'react';

import AddWorkoutForm from './AddWorkoutForm';

function AddWorkoutText(props) {
  return (
    <a className="add-workout" onClick={props.onClick}>
      + Add a workout...
    </a>
  );
}

export default class AddWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
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
 
  render() {
    const showForm = this.state.showForm;

    let content = null;

    const onSubmit = this.props.onSubmit;

    if (!showForm) {
      content = <AddWorkoutText onClick={this.handleTextClick} />;
    } else {
      content = <AddWorkoutForm onClick={this.handleFormClick} 
                                onSubmit={onSubmit} />;
    }

    return (
      <div id='AddWorkout'>
        {content}
      </div>
    );
  }
}


