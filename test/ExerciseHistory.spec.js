import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import ExerciseHistory from '../lib/ExerciseHistory';
import ExerciseHistoryItem from '../lib/ExerciseHistoryItem';

describe('<ExerciseHistory/>', () => {

  it('should be able to render set list in the history correctly', () => {
    const wrapper = shallow(<ExerciseHistory setList={[]}/>);
    wrapper.setProps({ 
      setList: [
        {id: 1, rep: 12, kg: 30},
        {id: 2, rep: 10, kg: 30},
        {id: 3, rep: 8, kg: 40},
        {id: 4, rep: 6, kg: 40}
      ],
    });
    expect(wrapper.find(ExerciseHistoryItem)).to.have.length(4);
  });

});