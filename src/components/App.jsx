import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react';
import { ChartsMenu } from '../components';
import Routes from '../routes';

class App extends Component {
  render() {
    return (
      <Container >
        <Header as='h4' icon textAlign='center'>
          HighCharts styling
         <ChartsMenu/>
        </Header>
       <Routes/>
      </Container>
    );
  }
}

export default App;
