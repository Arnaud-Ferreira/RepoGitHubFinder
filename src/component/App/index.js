import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';

// Importing components
import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import RepoResults from '../RepoResults';

// import data from the json folder
import resultsData from '../../data/repo';

import './style.scss';

function getResultItems(items) {
  // explicit return of objects
  return items.map((result) => ({
    id: result.id,
    imageUrl: result.owner.avatar_url,
    title: result.full_name,
    username: result.owner.login,
    description: result.description,
  }));
} 
export default function App() {
  const [search, setSearch] = useState('');

  const loadRepos = () => {
    console.log('je veux envoyer la requête vers GitHub');
  };

  return (
   <Container className="app">
     <Header />
     <SearchBar
       inputValue={search}
       onChangeInputValue={setSearch}
       onSubmitForm={loadRepos}
     />
     <Message content="The search have found 1000 results" />
     <RepoResults results={getResultItems(resultsData.items)} />
   </Container>
  );
}

