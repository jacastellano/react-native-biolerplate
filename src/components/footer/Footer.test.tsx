import * as React from 'react';
import renderer from 'react-test-renderer';

import { FooterComponent } from '../Footer/Footer';

it('renders correctly', () => {
    const footer = renderer
        .create(<FooterComponent />)
        .toJSON();
    expect(footer).toMatchSnapshot();
});