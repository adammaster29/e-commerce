import React from 'react';

const LoadinScreen = () => {
    return (
        <div  className='spinner-overlay' >
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadinScreen;