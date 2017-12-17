import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index.js';
import {ajax} from '../../util/index'

@connect((state) => {
  return {
    cntData: state.cnt
  }
}, {...actions})
export default class extends Component {
  constructor() {
    super();
    this.state = {};
  }

<<<<<<< HEAD
  componentDidMount() {
    ajax({
      url:'http://localhost:8333/api/myinfo',
      method:'get'
    }).then(res =>{
      let {userName,avatar} = res
      this.setState({userName,avatar})
    }).catch(err=>{
      debugger
    })
  }

  render () {
    let { cnt } = this.props.cntData;
    let {userName,avatar} = this.state
    return (
        <div className="page-wrap main-page" ref="mainPage">
          <div className="user-info-wrap">
            <img className="user-avatar" src={avatar} alt=""/>
            <p className="user-name">{userName}</p>
          </div>
        </div>
=======
  clickHandler() {
    this.props.setCnt();
  }


  render() {
    let {cnt} = this.props.cntData;

    return (
      <div className="page-wrap main-page" ref="mainPage">
        首页
        <br/>
        <span>使用 react global state(redux store) 切换路由后数据还在</span>
        <br/>
        <button onClick={this.clickHandler.bind(this)}>点击数量加一</button>
        <br/>
        <span>数量：</span><span>{cnt}</span>
      </div>
>>>>>>> 21a127581e2eee8a54cd61c2540f2306b9982490
    )
  }
}
import './index.less';
