import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
// Importing components
import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import RepoResults from '../RepoResults';

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
  const [results, setResults] = useState([]);

  const loadRepos = () => {
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setResults(response.data.items);
      })
      .catch((error)=> console.log(error));
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
     <RepoResults results={getResultItems(results)} />
   </Container>
  );
}

