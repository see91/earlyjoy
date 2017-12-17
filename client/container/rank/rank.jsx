import React, { Component } from 'react';
import './rank.less';
import {ajax} from "../../util";

export default class extends Component {
  constructor () {
    super();
    this.state = {
      userName:[]
    };
  }
  componentWillMount () {
    ajax({
      url:'http://localhost:8333/api/ranklist',
      method:'post',
      headers:{'Content-Type':"application/json"},
      // data:{userName},
    }).then(res=>{
      let {list,hasMore} =res;
      console.log(res);
      this.setState({list,hasMore})
    }).catch(err=>{
      console.log('222222')
      }
    )
  }
  render () {
    return (
      <div className="rank-page">
          <ul className="rank-list">
            <li className="rank-item" >
              <span className="rank-level">1</span>
              <img className="rank-avatar"/>
              <p className="rank-continued">连续起床777天</p>
            </li>

          </ul>
      </div>
    )
  }
}

