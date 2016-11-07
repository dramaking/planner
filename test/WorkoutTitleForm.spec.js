import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

// import WorkoutBoard from '../lib/WorkoutHeader';
// import WorkoutList from '../lib/WorkoutList';
// import Workout from '../lib/Workout';
// import WorkoutTitle from '../lib/WorkoutTitle';
import WorkoutTitleForm from '../lib/WorkoutTitleForm';

describe('<WorkoutTitleForm/>', () => {

  it('should be able to change the workout title', () => {
    const clickMe = sinon.stub();
    const wrapper = shallow(<WorkoutTitleForm onClick={ clickMe } />);
    //wrapper.setState({showForm: true});
    wrapper.find('input').simulate('change', {target: {value: 'Chest&Triceps'}});
    //wrapper.find('button').simulate('click');
    expect(wrapper.state().title).to.equal('Chest&Triceps');
    //expect(clickMe.callCount).to.be.equal(1);
  });

});
