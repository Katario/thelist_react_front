import React from 'react';
import './Item.css';

export default class Item extends React.Component {
  render () {
    return (
      <button
          className="Item"
          type="button"
          onClick={() => this.props.handleClick(this.props.id)}
        >
          {this.props.title}
      </button>
    );
  }
}
