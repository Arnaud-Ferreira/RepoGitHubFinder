import React from 'react';

// Importing components
import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import RepoResults from '../RepoResults';

import './style.scss';

function App() {
  return (
   <div className="App">
     <Header />
     <SearchBar />
     <Message />
     <RepoResults />
   </div>
  );
}

export default App;
