import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import ExerciseHeaderForm from '../lib/ExerciseHeaderForm';

describe('<ExerciseHeaderForm/>', () => {
  it('should be able to change the exercise title', () => {
    const wrapper = shallow(<ExerciseHeaderForm/>);
    wrapper.find('#exerciseTitle').simulate('change', {target: {value: 'Bench Press'}});
    expect(wrapper.state().title).to.equal('Bench Press');
  });
  it('should be able to change the exercise set', () => {
    const wrapper = shallow(<ExerciseHeaderForm/>);
    wrapper.find('#exerciseSet').simulate('change', {target: {value: 4}});
    expect(wrapper.state().set).to.equal(4);
  });
});