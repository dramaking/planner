import React, {Component} from 'react';

import WorkoutTitleForm from './WorkoutTitleForm';

function WorkoutTitleText(props) {
  return (
    <div className='workout-title-text' onClick={props.onClick}>
      <h5>{props.title}</h5>
    </div>
  );
}

export default class WorkoutTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      // title: 'Zicheng\'s Workout Plan',
      //title: this.props.title,
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

  // handleTitleChange = (title) => {
  //   this.setState({title: title});
  // }

  render() {
    const showForm = this.state.showForm;
    const onSubmit = this.props.onTitleSubmit;

    let content = null;

    if (!showForm) {
      content = <WorkoutTitleText onClick={this.handleTextClick} title={this.props.title} />;
    } else {
      content = <WorkoutTitleForm onClick={this.handleFormClick} 
                                  onSubmit={onSubmit}
                                  index={this.props.index} />;
    }

    return (
      <div id='WorkoutTitle'>
        {content}
      </div>
    );
  }
}