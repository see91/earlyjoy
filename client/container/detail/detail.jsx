import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ajax} from '../../util/index'
import './index.less'

export default class extends Component {
  constructor() {
    super();
    this.state = {userName: null, avatar: null}
  }

  componentDidMount() {
    ajax({
      url: '/api/otheruser/12',
      method: 'get'
    }).then(res => {
      console.log(res);
      let {userName, avatar} = res;
      this.setState({userName, avatar})
    })
  }

  render() {
    return (
      <div className="detail-main">
        <div className="user-info">
          <div className="user-avatar">
            <img src={this.state.avatar} alt=""/>
            <p>{this.state.userName}</p>
          </div>
          <div className="user-msg">
            新闻，是指报纸、电台、电视台、互联网等媒体经常使用的记录与传播信息的一种文体。是记录社会、传播信息、反映时代的一种文体。新闻概念有广义与狭义之分。广义上：除了发表于报刊、广播、互联网、电视上的评论与专文外的常用文本都属于新闻，包括消息、通讯、特写、速写（有的将速写纳入特写之列）等等;
          </div>
          <button>他的其他状态</button>
        </div>
      </div>
    )
  }
}
