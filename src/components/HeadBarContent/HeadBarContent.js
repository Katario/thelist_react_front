import React from 'react';
import './HeadBarContent.css';

export default class HeadBarContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedList: {},
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedList !== prevProps.selectedList) {
      const selectedList = this.props.selectedList;
      this.setState({ selectedList })
    }
  }

  handleChange(event) {
    event.persist();
    this.setState((prevState) => {
      console.log(event.target);
      let selectedList = {...prevState.selectedList};
      selectedList.title = event.target.value;
              
      return { selectedList };
    });
  }

  render() {
    return (
      <div className="HeadBarContent">
        <div className="HeadBarContent-input">
          <input 
            type='text'
            className='HeadBarContent-title'
            placeholder='Click here to type'
            maxLength='20'
            value={this.state.selectedList.title}
            onChange={this.handleChange}
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
