import React, {Component} from 'react';

export default class AddExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSetChange = this.handleSetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.props.onTitleChange(e.target.value);
  }

  handleSetChange(e) {
    this.props.onSetChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
    this.props.onClick();
  }

  render() {
    const title = this.props.title;
    const set = this.props.set;
    return (
      <form className="add-exercise-form">
        <div className="form-group">
          <input type="text" 
                 className="form-control" 
                 placeholder="+ Add an exercise..."
                 value={title}
                 onChange={this.handleTitleChange} />
        </div>
        <div className="form-group short-form">
          <input type="text" 
                 className="form-control" 
                 placeholder="Reps"
                 value={set}
                 onChange={this.handleSetChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
        <a href="#" className="close-icon" onClick={this.props.onClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>
      </form>
    );
  }
}
