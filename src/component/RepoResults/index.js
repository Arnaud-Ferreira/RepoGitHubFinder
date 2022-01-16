import React from 'react';
import Result from './Result';

import './style.scss';

export default function RepoResults() {
    return (
        <div className="results">
          <ul>
              <Result />
          </ul>
        </div>
    );
}