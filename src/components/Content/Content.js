import React from 'react';
import HeadBarContent from '../HeadBarContent/HeadBarContent';
import BlankTemplate from '../Templates/BlankTemplate';
import './Content.css';

export default class Content extends React.Component {

  
  render() {
    return (
      <div className="Content">
        <HeadBarContent selectedList={this.props.selectedList} />
        {/* Here I prepare to add the differents editable areas */}
        <BlankTemplate />
      </div>
    );
  }
}
