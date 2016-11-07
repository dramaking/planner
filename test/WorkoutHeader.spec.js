import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import WorkoutHeader from '../lib/WorkoutHeader';
import WorkoutHeaderForm from '../lib/WorkoutHeaderForm';

describe('<WorkoutHeader/>', () => {

  it('should have an initial showForm state', () => {
    const wrapper = mount(<WorkoutHeader/>);
    expect(wrapper.state().showForm).to.equal(false);
  });

  it('should have an initial title state', () => {
    const wrapper = mount(<WorkoutHeader/>);
    expect(wrapper.state().title).to.equal('Click to name your workout plan');
  });

  describe('Show Text or Form', () => {

    it('should render title of the board', () => {
      const wrapper = mount(<WorkoutHeader/>);
      wrapper.setState({showForm: false});
      expect(wrapper.find('.workout-header-title').text()).to.equal('Click to name your workout plan');
    });

    it('should render form', () => {
      const wrapper = mount(<WorkoutHeader/>);
      wrapper.setState({showForm: true});
      expect(wrapper.find('.workout-header-form')).to.have.length(1);
    });

    it('should show form when text is clicked', () => {
      const wrapper = mount(<WorkoutHeader/>);
      wrapper.setState({showForm: false});
      wrapper.find('.workout-header-title').simulate('click');
      expect(wrapper.find('.workout-header-form')).to.have.length(1);
    });

    it('should show text when form is closed', () => {
      const wrapper = mount(<WorkoutHeader/>);
      wrapper.setState({showForm: true});
      wrapper.find('.close-icon').simulate('click');
      expect(wrapper.find('.workout-header-title')).to.have.length(1);
    });
  });

  it('should handle the click event', () => {
    const clickMe = sinon.stub();
    const wrapper = shallow(<WorkoutHeaderForm onClick={ clickMe } />);
    wrapper.find('.close-icon').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });

  it('should be able to change the workout header', () => {
    const wrapper = mount(<WorkoutHeader/>);
    wrapper.setState({showForm: true});
    wrapper.find('input').simulate('change', {target: {value: 'Zicheng\'s Workout Plan'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state().title).to.equal('Zicheng\'s Workout Plan');
  });

  
  
});