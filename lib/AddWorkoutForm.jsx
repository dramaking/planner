import React, {Component} from 'react';

export default class AddWorkoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
    // this.setState({
    //   title: '',
    // });
    this.props.onClick();
  }

  render() {
    return (
      <form className="add-workout-form">
        <div className="form-group">
          <input type="text" 
                 className="form-control" 
                 placeholder="+ Add a workout..."
                 value={this.state.item}
                 onChange={this.handleTitleChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
        <a href="#" className="close-icon" onClick={this.props.onClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>
      </form>
    );
  }
}