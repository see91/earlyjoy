<<<<<<< HEAD:client/container/wrap/wrap.jsx
=======
import './wrap.less';
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/wrap/wrap.jsx
import React, { Component } from 'react';
import Header from '../../component/header/index.jsx';
import Footer from '../../component/footer/index.jsx';

export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  render () {
    return (
      <div className="app-container">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
import './wrap.less';
