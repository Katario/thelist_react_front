import React from 'react';
import Item from '../Item/Item';
import './NavBar.css';

let itemList = () => {
  let list = [];
  for (let i = 0; i < 16; i++) {
    list.push(<Item key={i} />);
  }

  return list;
}

let NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-content">
        This is the navBar Space.
        {itemList()}
      </div>
    </div>
  );
}

export default NavBar;
