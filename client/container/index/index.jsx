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
    )
  }
}
import './index.less';
