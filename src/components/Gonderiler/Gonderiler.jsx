import React from 'react';
import Gonderi from './Gonderi';
import './Gonderiler.css';

const Gonderiler = (props) => {
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((post, ind) => {
        return (
          <Gonderi key={ind} gonderiyiBegen={gonderiyiBegen} gonderi={post} />
        );
      })}
    </div>
  );
};

export default Gonderiler;
