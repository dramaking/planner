import React, {Component} from 'react';

import ExerciseHeaderForm from './ExerciseHeaderForm';

export default class ExerciseHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleTextClick = () => {
    this.setState({showForm: true});
  } 

  handleFormClick = () => {
    this.setState({showForm: false});
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.onExerciseDelete(this.props.index);
    
  }

  render() {
    const showForm = this.state.showForm;
    const onExerciseChange = this.props.onExerciseChange;

    let content = null;

    if (!showForm) {
      content = (
        <div id="ExerciseHeaderText" >
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title exercise-modal-title" id="myModalLabel">{this.props.title} - {this.props.set} Sets</h4>
          <span className="glyphicon glyphicon-pencil title-icon title-icon-pencil" aria-hidden="true" onClick={this.handleTextClick}></span>
          <span className="glyphicon glyphicon-trash title-icon title-icon-trash" aria-hidden="true" data-dismiss="modal" onClick={this.handleDelete}></span>
        </div>
      );
    } else {
      content = <ExerciseHeaderForm onClick={this.handleFormClick}
                                    onExerciseChange={onExerciseChange}
                                    index={this.props.index} />
    }

    return (
      <div id='ExerciseHeader'>
        {content}
      </div>
    )
  }
}