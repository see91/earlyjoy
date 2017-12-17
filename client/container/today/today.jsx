import React, { Component } from 'react';
import {ajax} from "../../util/index"
export default class extends Component {
  constructor () {
    super();
    this.state = {
      userName:[],active:[],getupTime:[],rank:[]
    };
  }

  componentWillMount () {
    ajax({
      method:"GET",
      url: 'http:/localhost:8333/api/myinfo',
      headers:{'Content-Type':"application/json"},
    }).then(res=>{
        let {userName,active,getupTime,rank} =res;
        this.setState={userName,active,getupTime,rank}
      }

    )
  }

  clickHandler () {

  }

  render () {
    let { cnt } = this.state;

    return (
      <div className="page-wrap today-page" ref="todayPage">
       <h2>今日好友情况/今日好友列表</h2>

          <div>
            <img src={this.state.active}/>
          </div>
      </div>
    )
  }
}
import './today.less';
