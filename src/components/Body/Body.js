import React from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import './Body.css';

let Body = () => {
  return (
    <div className="Body container">
      <NavBar />
      <Content />
    </div>
  );
}

export default Body;
