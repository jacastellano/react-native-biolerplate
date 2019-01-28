import * as React from 'react';
import { Container } from 'native-base';

import { HeaderComponent } from './components/header/Header';
import { FooterComponent } from './components/footer/Footer';
import { MainContentComponent } from './components/main-content/MainContent';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent text="Header" />
        <MainContentComponent />
        <FooterComponent />
      </Container>
    );
  }
}