import * as React from 'react';
import renderer from 'react-test-renderer';

import { MainContentComponent } from '../main-content/MainContent';

it('renders correctly', () => {
    const mainContent = renderer
        .create(<MainContentComponent />)
        .toJSON();
    expect(mainContent).toMatchSnapshot();
});