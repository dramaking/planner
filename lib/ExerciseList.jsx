import React, {Component} from 'react';

import Exercise from './Exercise';

export default class ExerciseList extends Component {
  render() {
    const exerciseList = this.props.exerciseList;
    const onExerciseFinish = this.props.onExerciseFinish;
    const onNotesChange = this.props.onNotesChange;

    const listItems = exerciseList.map((exercise) => 
      <Exercise key={exercise.id} 
                title={exercise.title} 
                set={exercise.set}
                index={exercise.id}
                workoutIndex={this.props.index}
                onExerciseFinish={onExerciseFinish}
                onNotesChange={onNotesChange}
                exerciseHistory={exercise.exerciseHistory}
                notes={exercise.notes} />
    );

    return (
      <div id='ExerciseList'>
        {listItems}
      </div>
    )
  }
}