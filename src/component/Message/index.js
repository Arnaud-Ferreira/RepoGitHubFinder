import React from 'react';
import { Message as Msg } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Message({ content }) {
  return (
    <div className="message">
      <Msg>{content}</Msg>
    </div>
    );
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
};