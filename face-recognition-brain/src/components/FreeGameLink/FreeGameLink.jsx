import React from 'react';
import './FreeGameLink.css';

const FreeGameLink = () => {
  return (
    <div>
      <p className="f3">{'Search Free-To-Play Games!'}</p>
      <div className="center">
        <div className="center pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeGameLink;
