import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import ExerciseHeader from '../lib/ExerciseHeader';
import ExerciseHeaderForm from '../lib/ExerciseHeaderForm';

describe('<ExerciseHeader/>', () => {
  it(' contains an <ExerciseHeaderForm /> component', () => {
    const wrapper = shallow(<ExerciseHeader/>);
    wrapper.setState({showForm: true});
    expect(wrapper.find(ExerciseHeaderForm)).to.have.length(1);
  });

  it('should render title and set of the exercise', () => {
    const wrapper = shallow(<ExerciseHeader/>);
    wrapper.setState({showForm: false});
    wrapper.setProps({
      title: 'Bench Press',
      set: 4,
    });
    expect(wrapper.find('.exercise-modal-title').text()).to.equal('Bench Press - 4 Sets');
  });

  it('should contain the pencil icon', () => {
    const wrapper = shallow(<ExerciseHeader/>);
    wrapper.setState({showForm: false});
    expect(wrapper.find('.title-icon-pencil')).to.have.length(1);
  });
});