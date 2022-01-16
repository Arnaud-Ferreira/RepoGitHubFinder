import React from 'react';
import { Message as Msg } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Message({ content, isError }) {
  return (
    <div className="message">
      <Msg negative={isError}>{content}</Msg>
    </div>
    );
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};