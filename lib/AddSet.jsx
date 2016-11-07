import React, {Component} from 'react';

import AddSetForm from './AddSetForm';

function AddSetText(props) {
  return (
    <div className="row">
      <div className="col-xs-6 col-xs-offset-4 add-set-wrapper">
        <a className="add-set-text" onClick={props.onClick}>
          + Add a set...
        </a>
      </div>
    </div>
  );
}

export default class AddSet extends Component {
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

    let content = null;

    const onSubmit = this.props.onSubmit;

    const index = this.props.setList.length + 1;

    if (!showForm) {
      content = <AddSetText onClick={this.handleTextClick} />;
    } else {
      content = <AddSetForm onClick={this.handleFormClick}
                            index={index}
                            onSubmit={onSubmit} />;
    }

    return (
      <div id='AddSet'>
        {content}
      </div>
    );
  }
}