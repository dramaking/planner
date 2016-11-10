import React, {Component} from 'react';

import WorkoutTitleForm from './WorkoutTitleForm';
import WorkoutTitleText from './WorkoutTitleText';

// function WorkoutTitleText(props) {
//   return (
//     <div className='workout-title-text' >
//       <h5 onClick={props.onClick}>{props.title}</h5>
//       <a href="#" className="close-icon" data-toggle="modal" data-target="#myModal">
//         <i className="fa fa-times" aria-hidden="true"></i>
//       </a>
      
//       <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
//         <div className="modal-dialog modal-sm" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//               <h4 className="modal-title" id="myModalLabel">Delete this workout?</h4>
//             </div>
            
//             <div className="modal-footer">
//               <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
//               <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.onDelete}>Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default class WorkoutTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.handleTextClick = this.handleTextClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(title) {
    this.setState({...title});
    this.props.onTitleSubmit(this.props.index, title);
  }

  handleTextClick = () => {
    this.setState({showForm: true});
  } 

  handleFormClick = () => {
    this.setState({showForm: false});
  }

  render() {
    const showForm = this.state.showForm;
    const onSubmit = this.props.onTitleSubmit;
    const onDelete = this.props.onDelete;

    let content = null;

    if (!showForm) {
      content = <WorkoutTitleText onClick={this.handleTextClick} 
                                  title={this.props.title}
                                  onDelete={onDelete}
                                  index={this.props.index} />;
    } else {
      content = <WorkoutTitleForm onClick={this.handleFormClick} 
                                  onSubmit={onSubmit}
                                  index={this.props.index}
                                  title={this.props.title} />;
    }

    return (
      <div id='WorkoutTitle'>
        {content}
      </div>
    );
  }
}