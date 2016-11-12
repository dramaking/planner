import React, {Component} from 'react';

import SetList from './SetList';
import AddSet from './AddSet';
import ExerciseNotes from './ExerciseNotes';
import ExerciseHistory from './ExerciseHistory';
import ExerciseHeader from './ExerciseHeader';

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setList: [
        // {id: 1, rep: 12, kg: 30},
        // {id: 2, rep: 10, kg: 30},
        // {id: 3, rep: 8, kg: 40},
        // {id: 4, rep: 6, kg: 40}
      ],
      //notes: 'Click to edit your notes here',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSetEdit = this.handleSetEdit.bind(this);
    this.handleSetDelete = this.handleSetDelete.bind(this);
    this.handleExerciseFinish = this.handleExerciseFinish.bind(this);
  }

  handleSubmit(rep, kg) {
    const setList = this.state.setList.slice();
    const index = setList.length + 1;
    setList.push({id: index, rep: rep, kg: kg});
    this.setState({setList: setList});
  }

  handleSetEdit(index, rep, kg) {
    const setList = this.state.setList.slice();
    const setItem = {id: index, rep: rep, kg: kg};
    setList[index - 1] = setItem;
    this.setState({setList: setList});
  }

  handleSetDelete(index) {
    const setList = this.state.setList.slice();
    setList.splice(index - 1, 1);
    let setItem;
    let count = 1;
    for (setItem of setList) {
      setItem.id = count;
      count++;
    }
    this.setState({setList: setList});
  }

  handleExerciseFinish(e) {
    if (this.state.setList.length !== 0) {
      e.preventDefault();
      this.props.onExerciseFinish(this.props.index, this.state.setList);
      this.setState({
        setList: []
      });
    }
  }

  render() {
    const targetId = "#myModal" + this.props.workoutIndex.toString() + this.props.index.toString();
    const target = "myModal" + this.props.workoutIndex.toString() + this.props.index.toString();
    const onNotesChange = this.props.onNotesChange;
    const onExerciseChange = this.props.onExerciseChange;
    const onExerciseDelete = this.props.onExerciseDelete;

    return (
      <div className='exercise'>
        <div className="exercise-container">

          <a className="exercise-details" data-toggle="modal" data-target={targetId}>
            <div className="exercise-title">
              <p>{this.props.title}</p>
            </div>
            <div className="exercise-set">
              <p>{this.props.set} <small>Sets</small></p>
            </div>
          </a>


          <div className="modal fade" id={target} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">

                <div className="modal-header">
                  <ExerciseHeader title={this.props.title}
                                  set={this.props.set}
                                  onExerciseChange={onExerciseChange}
                                  onExerciseDelete={onExerciseDelete}
                                  index={this.props.index} />
                </div>

                <div className="modal-body">
                  <ExerciseNotes onNotesChange={onNotesChange}
                                 index={this.props.index}
                                 note={this.props.notes} />

                  <div className="row exercise-history set-space">
                    <div className="col-xs-2 small-title">History</div>
                    <div className="col-xs-2 col-xs-offset-2">Set</div>
                    <div className="col-xs-1">Rep</div>
                    <div className="col-xs-1 col-xs-offset-1">Kg</div>
                  </div>

                  <ExerciseHistory setList={this.props.exerciseHistory} />

                  <hr />
                  <div className="row exercise-record set-space">
                    <div className="col-xs-2 small-title">Today</div>
                    <div className="col-xs-2 col-xs-offset-2">Set</div>
                    <div className="col-xs-1">Rep</div>
                    <div className="col-xs-1 col-xs-offset-1">Kg</div>
                  </div>

                  <SetList setList={this.state.setList}
                           onSubmit = {this.handleSetEdit}
                           onDelete = {this.handleSetDelete} />
                  <AddSet setList={this.state.setList}
                          onSubmit={this.handleSubmit} />

                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary exercise-finish" onClick={this.handleExerciseFinish}>Finish Exercise</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


