import React, {Component} from 'react';

import EditSetItemForm from './EditSetItemForm';

function SetItemText(props) {
  return (
    <div className="row setItem set-space" onClick={props.onClick}>
      <div className="col-xs-2 col-xs-offset-4">{props.index}</div>
      <div className="col-xs-1">{props.rep}</div>
      <div className="col-xs-1 text-center">&times;</div>
      <div className="col-xs-1">{props.kg}</div>
    </div>
  );
}

export default class SetItem extends Component {
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
    const onSubmit = this.props.onSubmit;
    const onDelete = this.props.onDelete;

    let content = null;

    if (!showForm) {
      content = <SetItemText onClick={this.handleTextClick} 
                             index={this.props.index}
                             rep={this.props.rep}
                             kg={this.props.kg} />;
    } else {
      content = <EditSetItemForm onClick={this.handleFormClick}
                                 index={this.props.index}
                                 rep={this.props.rep}
                                 kg={this.props.kg}
                                 onSubmit={onSubmit}
                                 onDelete={onDelete} />;
    }

    return (
      <div id='WorkoutTitle'>
        {content}
      </div>
    );
  }
}