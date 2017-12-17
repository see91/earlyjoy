import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import {ajax} from '../../util/index'

@connect(state => ({
  otherInfo: state.otherInfo
}), { ...actions })
export default class extends Component {
  constructor () {
    super();
  }
  componentDidMount() {
    ajax({
      url:'http://localhost:8333/api/myinfo',
      method:'get',
      data:this.state
    })/*.then(res =>{
      let {userName,avatar} = res
      this.setState({userName,avatar})
    }).catch(err=>{
      debugger
    })*/
  }
  render () {
    return (
      <div className="user">
        <div className="user-tupian">
          <p>上传图片+</p>
        </div>
        <div className="xiang">
          <p>当前时间：7:50</p>
          <p>目标时间：8:00</p>
          <p>状态：准时起床</p>
          <input type="text"/>
        </div>
        <button>确定打卡</button>
      </div>
    )
  }
}
import './user.less';
