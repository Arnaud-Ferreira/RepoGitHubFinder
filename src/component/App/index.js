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

export default function App() {
  // implicit return of objects
  const resultsItems = resultsData.items.map((result) => ({
      id: result.id,
      imageUrl: result.owner.avatar_url,
      title: result.full_name,
      username: result.owner.login,
      description: result.description,
  }));

  return (
   <Container className="app">
     <Header />
     <SearchBar />
     <Message content="The search have found 1000 results" />
     <RepoResults results={resultsItems} />
   </Container>
  );
}

