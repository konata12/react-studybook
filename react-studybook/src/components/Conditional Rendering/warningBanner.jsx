import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
  
    return (
        <div className="warning">
            Попередження!
        </div>
    );
}

export default WarningBanner;
