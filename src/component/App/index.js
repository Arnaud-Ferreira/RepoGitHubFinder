import React from 'react';
import { Container } from 'semantic-ui-react';

// Importing components
import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import RepoResults from '../RepoResults';

// import data from the json folder
import resultsData from '../../data/repo';

import './style.scss';

function App() {
  return (
   <Container className="app">
     <Header />
     <SearchBar />
     <Message content="The search have found 1000 results" />
     <RepoResults results={resultsData.items} />
   </Container>
  );
}

export default App;
