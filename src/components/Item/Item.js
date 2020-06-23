import React from 'react';
import './Item.css';

export default class Item extends React.Component {
  render () {
    return (
      <button
          className="Item"
          type="button"
        >
          {this.props.title}
      </button>
    );
  }
}
