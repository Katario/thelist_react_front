import React from 'react';
import HeadBarContent from '../HeadBarContent/HeadBarContent';
import BlankTemplate from '../Templates/BlankTemplate';
import './Content.css';

let Content = () => {
  return (
    <div className="Content">
      <HeadBarContent />
      {/* Here I prepare to add the differents editable areas */}
      <BlankTemplate />
    </div>
  );
}

export default Content;
