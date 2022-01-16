import React from 'react';
// Using semantic ui, for searchBar container and input
import { Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function SearchBar({ inputValue, onChangeInputValue, onSubmitForm }) {
  return (
    <div className="searchbar">
      <Segment>
        <Form onSubmit={onSubmitForm}>
          <Form.Input
            icon='search'
            iconPosition='left'
            fluid
            placeholder='Search a repo'
            value={inputValue}
            // i don't want to store the event here, but the function
            // execute this func when typing
            onChange={(event) => onChangeInputValue(event.target.value)}
          />
        </Form>
       </Segment>
        </div>
    );
}

SearchBar.propTypes = {
 inputValue: PropTypes.string.isRequired,
 onChangeInputValue: PropTypes.func.isRequired,
};