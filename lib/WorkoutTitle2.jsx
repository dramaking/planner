import React, {Component} from 'react';
import InlineEdit from 'react-edit-inline';

export default class WorkoutTitle extends Component {
  constructor(props) {
    super(props);
    // let title = this.props.title;
    // this.state = {
    //   title: title,
    // };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.customValidateText = this.customValidateText.bind(this);
  }

  handleTitleChange(title) {
    // this.setState({...title});
    this.props.onTitleSubmit(this.props.index, title);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.onDelete(this.props.index);
  }

  customValidateText(text) {
    return (text.length > 0 && text.length < 64);
  }

  render() {
    let textInput;
    if (this.props.title) {
      textInput = this.props.title;
    } else {
      textInput = '';
    }
    return (
      <div id='WorkoutTitle'>
        <div className='workout-title-text'>
  
          <InlineEdit
            validate={this.customValidateText}
            activeClassName="editing"
            text={textInput}
            paramName="title"
            change={this.handleTitleChange}
            editingElement="input"
            style={{
              //backgroundColor: 'yellow',
              minWidth: 150,
              display: 'inline-block',
              width: 560,
              margin: 0,
              padding: 0,
              fontSize: 15,
              marginLeft: "0.5em",
              //outline: 0,
              //border: 0,
              whiteSpace: "normal"
            }}
          />
    
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
          </div>

        </div>
      </div>
    );
  }
}