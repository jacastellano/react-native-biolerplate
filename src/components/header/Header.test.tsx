import * as React from 'react';
import renderer from 'react-test-renderer';

import { HeaderComponent } from '../header/Header';

it('renders correctly', () => {
    const header = renderer
        .create(<HeaderComponent text="Testing HeaderComponent" />)
        .toJSON();
    expect(header).toMatchSnapshot();
});