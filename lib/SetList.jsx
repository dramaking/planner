import React, {Component} from 'react';

import SetItem from './SetItem';

export default class SetList extends Component {
  render() {
    const setList = this.props.setList;
    const onSubmit = this.props.onSubmit;
    const onDelete = this.props.onDelete;

    const listItems = setList.map((set) =>
      <SetItem key={set.id}
               index={set.id}
               rep={set.rep}
               kg={set.kg}
               onSubmit={onSubmit}
               onDelete={onDelete} />
    );

    return (
      <div className="SetList">
        {listItems}
      </div>
    )
  }
}