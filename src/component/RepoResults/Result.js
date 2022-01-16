import React from 'react';
// Semantic-ui components
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Result({ 
  imageUrl,
  title,
  username,
  description,
 }) {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={true} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta textAlign="center">
            <span>{username}</span>
          </Card.Meta>
          <Card.Description>
            {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Result.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Result.defaultProps= {
  description: 'No description',
};