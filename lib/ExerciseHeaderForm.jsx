import React, {Component} from 'react';

export default class ExerciseHeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      set: null,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSetChange = this.handleSetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleSetChange(e) {
    this.setState({
      set: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onExerciseChange(this.props.index, this.state.title, this.state.set);
    this.setState({
      title: '',
      set: null,
    });
    this.props.onClick();
  }

  render() {
    return (
      <form className="form-inline exercise-header-form">
        <div className="form-wrapper row">
          <div className="form-group col-xs-4">
            
            <input type="text" 
                   className="form-control" 
                   id="exerciseTitle"
                   placeholder="Exercise title"
                   value={this.state.item}
                   onChange={this.handleTitleChange} 
                   />
          </div>
          <div className="form-group col-xs-2">
            
            <input type="text" 
                   className="form-control form-shorter" 
                   id="exerciseSet"
                   placeholder="Set"
                   value={this.state.item}
                   onChange={this.handleSetChange} 
                   />
          </div>
          <div className="col-xs-4">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
            <a href="#" className="close-icon" onClick={this.props.onClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </form>
    )
  }
}