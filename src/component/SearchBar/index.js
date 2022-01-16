import React from 'react';
// Using semantic ui, for searchBar container and input
import { Segment, Form } from 'semantic-ui-react';
import './style.scss';

export default function SearchBar() {
  return (
    <div className="searchbar">
      <Segment>
        <Form>
          <Form.Input
            icon='search'
            iconPosition='left'
            fluid
            placeholder='Search a repo'
          />
        </Form>
       </Segment>
        </div>
    );
}