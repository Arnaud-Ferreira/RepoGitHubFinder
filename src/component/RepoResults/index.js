import React from 'react';
import { Card } from 'semantic-ui-react';
import Result from './Result';

import './style.scss';

export default function RepoResults() {
  return (
    <div className="results">
      <Card.Group itemsPerRow={3} stackable>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Card.Group>
        </div>
    );
}