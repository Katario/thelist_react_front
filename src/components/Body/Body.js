import React from 'react';
import axios from 'axios';
import api from '../../api/api';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import './Body.css';

export default class Body extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    }  
  }

  componentDidMount() {
    api.get('/list')
      .then(res => {
        const lists = res.data.lists;
        this.setState({ lists });
      })
  }
  
  render() {
    return (
      <div className="Body container">
        <NavBar lists={this.state.lists} />
        <Content />
      </div>
    );
  }
}
