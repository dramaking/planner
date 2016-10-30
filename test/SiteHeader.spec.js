import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SiteHeader from '../lib/SiteHeader';

describe('<SiteHeader/>', function () {
  it('should have an image to display the logo', function () {
    const wrapper = shallow(<SiteHeader/>);
    expect(wrapper.find('img')).to.have.length(1);
  });
});