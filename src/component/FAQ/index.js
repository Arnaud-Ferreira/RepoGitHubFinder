import React from 'react';
import { Header } from 'semantic-ui-react';

export default function FAQ() {
  return (
      <div className="faq">
          <Header as="h1">FAQ</Header>
          <Header as="h2">What is it for?</Header>
          <p>This application allows you to find a list of GitHub repositories for a given criteria.</p>
          <Header as="h2">How to make a search ?</Header>
          <p>On the search page, fill in the search field and validate the search.</p>
          <Header as="h2">Can I search for any term ? </Header>
          <p>Yeah that's crazy</p>
      </div>
    );  
}