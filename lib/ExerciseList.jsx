import React, {Component} from 'react';

import Exercise from './Exercise';

export default class ExerciseList extends Component {
  render() {
    const exerciseList = this.props.exerciseList;
    const onExerciseFinish = this.props.onExerciseFinish;
    const onNotesChange = this.props.onNotesChange;
    const onExerciseChange = this.props.onExerciseChange;
    const onExerciseDelete = this.props.onExerciseDelete;

    const listItems = exerciseList.map((exercise) => 
      <Exercise key={exercise.id} 
                title={exercise.title} 
                set={exercise.set}
                index={exercise.id}
                workoutIndex={this.props.index}
                onExerciseFinish={onExerciseFinish}
                onNotesChange={onNotesChange}
                onExerciseChange={onExerciseChange}
                onExerciseDelete={onExerciseDelete}
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