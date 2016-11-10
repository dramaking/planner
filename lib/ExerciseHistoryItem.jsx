import React, {Component} from 'react';

import SetItem from './SetItem';

export default class ExerciseHistoryItem extends Component {
  render() {
    return (
      <div className="row set-space">
        <div className="col-xs-2 col-xs-offset-4">{this.props.index}</div>
        <div className="col-xs-1">{this.props.rep}</div>
        <div className="col-xs-1 text-center">&times;</div>
        <div className="col-xs-1">{this.props.kg}</div>
      </div>
    )
  }
}