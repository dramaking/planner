import React, {Component} from 'react';

import AddExerciseForm from './AddExerciseForm';

function AddExerciseText(props) {
  return (
    <a className="add-exercise" onClick={props.onClick}>
      + Add an exercise...
    </a>
  );
}

export default class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
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

    const title = this.props.title;
    const set = this.props.set;
    const onTitleChange = this.props.onTitleChange;
    const onSetChange = this.props.onSetChange;
    const onSubmit = this.props.onSubmit;

    if (!showForm) {
      content = <AddExerciseText onClick={this.handleTextClick} />;
    } else {
      content = <AddExerciseForm onClick={this.handleFormClick}
                                 title={title}
                                 set={set}
                                 onTitleChange={onTitleChange}
                                 onSetChange={onSetChange}
                                 onSubmit={onSubmit} />;
    }

    return (
      <div id='AddExercise'>
        {content}
      </div>
    )
  }
}


