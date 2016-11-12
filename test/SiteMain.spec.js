import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SiteMain from '../lib/SiteMain';
import WorkoutBoard from '../lib/WorkoutBoard';
import WorkoutHeader from '../lib/WorkoutHeader';

describe('<SiteMain/>', function () {
  it('contains an <WorkoutHeader/> component', function () {
    const wrapper = shallow(<SiteMain/>);
    expect(wrapper.find(WorkoutHeader)).to.have.length(1);
  });

  it('contains an <WorkoutBoard/> component', function () {
    const wrapper = shallow(<SiteMain/>);
    expect(wrapper.find(WorkoutBoard)).to.have.length(1);
  });
});