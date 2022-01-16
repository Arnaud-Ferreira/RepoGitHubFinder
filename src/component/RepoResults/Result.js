import React from 'react';
// Semantic-ui components
import { Card, Image, Icon } from 'semantic-ui-react';
import './style.scss';

export default function Result() {
  return (
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={true} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  );
}