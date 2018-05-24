import App from '../src/components/App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
    test('should match title', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('h1').text()).toBe('React boilerplate');
        expect(wrapper).toMatchSnapshot;
    })
});
