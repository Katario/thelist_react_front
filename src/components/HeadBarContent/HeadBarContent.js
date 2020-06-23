import React from 'react';
import './HeadBarContent.css';

export default class HeadBarContent extends React.Component {
  render() {
    return (
      <div className="HeadBarContent">
        <div className="HeadBarContent-input">
          <input 
            type='text'
            className='HeadBarContent-title'
            placeholder='Click here to type'
            maxLength='20'
            value={this.props.selectedList.title}
          ></input>
          <span className='HeadBarContent-underline'></span>
        </div>

        <div className="HeadBarContent-authors">
          <span className='HeadBarContent-author'>{this.props.selectedList.author}</span>
        </div>

        <div className='HeadBarContent-template'>
          Blank Template
        </div>
      </div>
    );
  }
}
