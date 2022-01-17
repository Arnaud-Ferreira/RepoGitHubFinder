import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { Route } from 'react-router-dom';


// Importing components
import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import RepoResults from '../RepoResults';
import Loading from '../Loading';
// import FAQ from '../FAQ';

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isMessageVisible, setMessageVisible] = useState(false);

  const loadRepos = () => {
    setLoading(true);
    setHasError(false);

    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      // Destructuring the data object 
      .then(({ data }) => {
      // Picking the properties i need and rename rename the totalcount property
        const { items, total_count: totalCount } = data;
        setResults(items);
        setMessage(`The search have found ${totalCount} result${totalCount > 1 ? 's' : ''}`);
      })
      .catch((error) => {
        console.log(error);
        setMessage('Une erreur est survenue');
        setHasError(true);
      })
      .finally(() => {
       setLoading(false);
       setMessageVisible(true);
      });
  };

  return (
   <Container className="app">
     <Header />
     <SearchBar
       inputValue={search}
       onChangeInputValue={setSearch}
       onSubmitForm={loadRepos}
     />
     <Message
       content={message}
       isError={hasError}
       visible={isMessageVisible}
     />
     {/* If loading is true we display the loader */}
     {loading ? (
     <Loading />
     ) : (
     // otherwise we display the Results
       <RepoResults results={getResultItems(results)} />
     )}
     {/* <Route path="/faq">
       <FAQ />
     </Route> */}
   </Container>
  );
}

