import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import AddWorkoutForm from '../lib/AddWorkoutForm';

describe('<AddWorkoutForm/>', () => {

  it('should be able to add a workout', () => {
    const wrapper = shallow(<AddWorkoutForm />);
    wrapper.find('input').simulate('change', {target: {value: 'Chest&Triceps'}});
    expect(wrapper.state().title).to.equal('Chest&Triceps');
  });

});
