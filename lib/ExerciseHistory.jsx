import React, {Component} from 'react';

import ExerciseHistoryItem from './ExerciseHistoryItem';

export default class ExerciseHistory extends Component {
  render() {
    const setList = this.props.setList;

    const listItems = setList.map((set) =>
      <ExerciseHistoryItem key={set.id}
                           index={set.id}
                           rep={set.rep}
                           kg={set.kg} />
    );

    return (
      <div className="ExerciseHistory">
        {listItems}
      </div>
    )
  }
}