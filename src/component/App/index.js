import React from 'react';
import { Container } from 'semantic-ui-react';

// Importing components
import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import RepoResults from '../RepoResults';

import './style.scss';

function App() {
  return (
   <Container className="app">
     <Header />
     <SearchBar />
     <Message />
     <RepoResults />
   </Container>
  );
}

export default App;
