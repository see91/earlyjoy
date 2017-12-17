<<<<<<< HEAD:client/container/today/today.jsx
=======
import './today.less';
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/today/today.jsx
import React, { Component } from 'react';

export default class extends Component {
  constructor () {
    super();
    this.state = {
      cnt: 0
    };
  }

  componentWillMount () {
<<<<<<< HEAD:client/container/today/today.jsx

  }

  clickHandler () {
    this.setState({
      cnt: this.state.cnt+1
    })
=======
    let isToadyListIsInit = this.props.todayListInfo.isInit;
    !isToadyListIsInit && this.props.getToadyList();
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/today/today.jsx
  }

  render () {
    let { cnt } = this.state;

    return (
      <div className="page-wrap today-page" ref="todayPage">
        今日列表
        <br/>
        <span>使用 react local state 切换路由后数据就不见了</span>
        <button onClick={this.clickHandler.bind(this)}>点击数量加一</button>
        <br/>
        <span>数量：</span><span>{cnt}</span>
      </div>
    )
  }
}
import './today.less';
