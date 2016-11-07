import React, {Component} from 'react';

import Exercise from './Exercise';

export default class ExerciseList extends Component {
  render() {
    const exerciseList = this.props.exerciseList;

    const listItems = exerciseList.map((exercise) => 
      <Exercise key={exercise.id} 
                title={exercise.title} 
                set={exercise.set}
                index={exercise.id} />
    );

    return (
      <div id='ExerciseList'>
        {listItems}
      </div>
    )
  }
}