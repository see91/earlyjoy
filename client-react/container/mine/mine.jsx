<<<<<<< HEAD:client/container/mine/mine.jsx
=======
import './mine.less';
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/mine/mine.jsx
import React, { Component } from 'react';

export default class extends Component {
  constructor (props) {
    super();
    this.state = {

    };
<<<<<<< HEAD:client/container/mine/mine.jsx
=======
    this.myInfoBak = null;
  }

  componentWillMount () {
    let { userName } = this.props.myInfo;
    if ( userName ) {
      this.myInfoBak = this.props.myInfo;
    }
    this.props.getMyInfo();
  }

  componentWillUpdate (nextProps, nextState) {
    let { userName } = nextProps.myInfo;
    if ( userName && !this.myInfoBak ) {
      this.myInfoBak = nextProps.myInfo;
    }
  }

  componentWillUnmount () {
    let { userName, avatar, getupTime } = this.props.myInfo;

    if ( userName ) {
      console.log('componentWillUnmount', this.myInfoBak);
      this.props.recoverMyInfo(this.myInfoBak);
    }
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/mine/mine.jsx
  }

  render () {

    return (
      <div className="page-wrap mine-page">
        个人中心
      </div>
    )
  }
}
import './mine.less';
