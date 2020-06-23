import React from 'react';
import Item from '../Item/Item';
import './NavBar.css';

export default class NavBar extends React.Component {

  pushItemList = () => {
    return this.props.lists.map((list, i) => {
      return <Item 
        key={i}
        id={list._id}
        title={list.title}
        handleClick={this.props.handleItemClick}
      />;
    })
  }
 
  render() {
    const isList = this.props.lists.length > 0 ? true : false;

    return (
      <div className="NavBar">
        <div className="NavBar-content">
          This is the navBar Space.
          {isList &&
           this.pushItemList()
          }
        </div>
      </div>
    );
  }
}
