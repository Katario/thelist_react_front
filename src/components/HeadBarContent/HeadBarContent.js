import React from 'react';
import './HeadBarContent.css';

let HeadBarContent = () => {
  return (
    <div className="HeadBarContent">
      <div className="HeadBarContent-input">
        <input 
          type='text'
          className='HeadBarContent-title'
          placeholder='Click here to type'
          maxLength='20'
        ></input>
        <span className='HeadBarContent-underline'></span>
      </div>

      <div className="HeadBarContent-authors">
        <span className='HeadBarContent-author'>By Author</span>
      </div>

      <div className='HeadBarContent-template'>
        Blank Template
      </div>
    </div>
  );
}

export default HeadBarContent;
