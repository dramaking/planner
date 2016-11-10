import React, {Component} from 'react';

export default class WorkoutTitleText extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    console.log(this.props.index);
  }

  

  handleDelete(e) {
    e.preventDefault();
    console.log(this.props.index);
    this.props.onDelete(this.props.index);
  }

  render() {
    return (
      <div className='workout-title-text' >
        <h5 onClick={this.props.onClick}>{this.props.title}</h5>
        <a href="#" className="close-icon" onClick={this.handleDelete}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>
        {/*
        <a href="#" className="close-icon" data-toggle="modal" data-target="#myModal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </a>
       
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Delete this workout?</h4>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}