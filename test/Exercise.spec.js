import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Exercise from '../lib/Exercise';
// import SetList from '../lib/SetList';
// import SetItem from '../lib/SetItem';
// import EditSetItemForm from '../lib/EditSetItemForm';

// describe('<Exercise/>', () => {
//   it('should handle the finish exercise event', () => {
//     const clickMe = sinon.stub();
//     const wrapper = shallow(<Exercise onClick={ clickMe } />);
//     wrapper.find('.exercise-finish').simulate('click');
//     expect(clickMe.callCount).to.be.equal(1);
//   });
// });