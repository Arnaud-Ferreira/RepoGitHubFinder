import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Result from './Result';

import './style.scss';

export default function RepoResults({ results }) {
  return (
    <div className="results">
      <Card.Group itemsPerRow={3} stackable>
        {results.map((result) => (
          <Result
            key={result.id}
            imageUrl={result.owner.avatar_url}
            title={result.full_name}
            username={result.owner.login}
            description={result.description} />
        ))}
      </Card.Group>
        </div>
    );
}

RepoResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      full_name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }),
      description: PropTypes.string,
    }),
  ).isRequired,
};