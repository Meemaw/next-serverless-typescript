import { shallow } from 'enzyme';
import * as React from 'react';

import App from '../../pages';

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<App />);
    expect(app.find('p').text()).toBe('Hello World!');
  });
});
