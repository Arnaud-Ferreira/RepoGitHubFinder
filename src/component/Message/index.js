import React from 'react';
import { Message as Msg } from 'semantic-ui-react';
import './style.scss';

export default function Message() {
  return (
    <div className="message">
      <Msg>the search found 100 results</Msg>
    </div>
    );
}