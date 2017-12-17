import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
<<<<<<< HEAD:client/container/index/index.jsx
import {ajax} from "../../util/index";

@connect((state) => {
  return {
    cntData: state.cnt
=======
import { Link } from 'react-router-dom';
import ScrollList from '../../component/scrollList/scrollList.jsx';
import FeedCard from '../../component/feedCard/feedCard.jsx';
import UserInfo from '@/component/userInfo/userInfo.jsx';

@connect((state) => {
  return {
    myInfo: state.myInfo,
    myListInfo: state.myListInfo
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/index/index.jsx
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {
    };
  }

<<<<<<< HEAD:client/container/index/index.jsx
  componentDidMount() {
    ajax({
      url:'http://localhost:8333/api/myinfo',
      method:'get'
    }).then(res=>{
      let {userName,avatar} = res;
      this.setState({userName,avatar})
    }).catch(err=>{
      }
    )
=======
  componentWillMount () {
  }

  componentDidMount () {
    let { userName, loading: isLoadingMyInfo } = this.props.myInfo;
    let isMyListInit = this.props.myListInfo.isInit;

    !userName && this.props.getMyInfo();
    !isMyListInit && this.props.getMyList();
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/index/index.jsx
  }
  render () {
<<<<<<< HEAD:client/container/index/index.jsx
    let { cnt } = this.props.cntData;
    let {userName,avatar} = this.state;
    return (
      <div className="page-wrap main-page" ref="mainPage">
        <div className="user-info-wrap">
          <img className="user-avatar" src={avatar}/>
          <p className="user-name">{userName}</p>
=======
    let { list, hasMore, loading, isEmpty } = this.props.myListInfo;

    return (
        <div className="page-wrap main-page" ref="mainPage">
          <UserInfo {...this.props.myInfo} />
          <Link to='/new'>
            <div className="new-wrap weui-cells">
                <span className="add-icon">+</span>
                <span className="add-text">添加今日状态</span>
            </div>
          </Link>
          <div className="weui-cells__title">最近状态</div>
          <ScrollList
            element={this.refs.mainPage}
            onLoad={this.props.getMyList}
            hasMore={hasMore}
            loading={loading}
            isEmpty={isEmpty}
          >
            <div className="recently-wrap">
              {
                list.map((item, index) => {
                  return (
                    <FeedCard route="/detail/222" item={item} key={index}/>
                  )
                })
              }
            </div>
          </ScrollList>
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/container/index/index.jsx
        </div>
      </div>
    )
  }
}
import './index.less';
