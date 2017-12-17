<<<<<<< HEAD:client/component/header/index.jsx
=======
import './index.less';
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/component/header/index.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  routing: state.routing
}))
export default class extends Component {
  constructor () {
    super();
  }

  getTitle () {
    let { location: { pathname } } = this.props.routing;
    return `同步路由信息 ${pathname}`;
  }

  render () {
    return (
      <div className="header">
        <div className="inner">
          {this.getTitle()}
        </div>
      </div>
    )
  }
}
import './index.less';
