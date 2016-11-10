import React, {Component} from 'react';
import InlineEdit from 'react-edit-inline';

export default class ExerciseNotes extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   note: 'Click to edit your notes here',
    // };
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.customValidateText = this.customValidateText.bind(this);
  }

  handleNoteChange(note) {
    this.setState({...note});
    //console.log(note.note);
    this.props.onNotesChange(this.props.index, note.note);
  }

  customValidateText(text) {
    return (text.length > 0 && text.length < 256);
  }

  render() {
    // let note = this.state.note;
    // if (this.props.note !== '') {
    //   note = this.props.note;
    // }
    return (
      <div className="ExerciseNotes">
        <div className="row set-space">
          <div className="col-xs-12 modal-note-title">
            <span className="small-title">Notes</span>
          </div>
        </div>
        <div className="row note-edit set-space">
          <div className="col-xs-12">
            <InlineEdit
              //validate={this.customValidateText}
              activeClassName="editing"
              text={this.props.note}
              paramName="note"
              change={this.handleNoteChange}
              editingElement="textarea"
              style={{
                //backgroundColor: 'yellow',
                minWidth: 150,
                display: 'inline-block',
                width: 560,
                margin: 0,
                padding: 0,
                fontSize: 15,
                //outline: 0,
                //border: 0,
                whiteSpace: "normal"
              }}
            />
          </div>
        </div>
        <hr />
      </div>
    )
  }
}