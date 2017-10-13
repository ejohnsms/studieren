import React from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

export {WarningBanner};
