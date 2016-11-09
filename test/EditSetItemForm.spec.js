import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import EditSetItemForm from '../lib/EditSetItemForm';

describe('<EditSetItemForm/>', () => {

  it('should be able to edit rep of an exercise', () => {
    const wrapper = shallow(<EditSetItemForm />);
    wrapper.find('.rep-input').simulate('change', {target: {value: 15}});
    expect(wrapper.state().rep).to.equal(15);
  });

  it('should be able to edit kg of an exercise', () => {
    const wrapper = shallow(<EditSetItemForm />);
    wrapper.find('.kg-input').simulate('change', {target: {value: 30}});
    expect(wrapper.state().kg).to.equal(30);
  });

  it('should handle the close click event', () => {
    const clickMe = sinon.stub();
    const wrapper = shallow(<EditSetItemForm onClick={ clickMe } />);
    wrapper.find('.close-icon').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });


});