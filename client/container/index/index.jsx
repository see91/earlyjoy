import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import {ajax} from '../../util/index'
@connect((state) => {
  return {
    cntData: state.cnt
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  clickHandler () {
    this.props.setCnt();
  }

  componentDidMount() {
    ajax({
      url: 'http://localhost:8333/api/myinfo',
      method: 'GET',
    }).then(res => {
      let {userName, avatar,getupTime,rank,continued} = res;
      this.setState({userName,avatar});
    })
    ajax({
      url:'http://localhost:8333/api/markToday',
      method:'POST',
      headers:{'Content-Type':"application/json"},
      data:{img,text,getupTime}
    }).then(res=>{
      let {code,message} =res;
      this.setState({code,message})
    })
  }


  render () {
    let { cnt } = this.props.cntData;

    return (
        <div className="page-wrap main-page" ref="mainPage">
          <div className="my-avatar">
            <img src={this.state.avatar}/>
          </div>
          <div className="my-name">
            <p>{this.state.userName}</p>
          </div>
          <div className="get-up-wrap new-wrap">
            <span className="add-icon">+</span>
             <span className="add-text">添加今日状态</span>

          </div>

        </div>
    )
  }
}
import './index.less';
