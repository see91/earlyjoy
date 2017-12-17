import { createStore, compose, applyMiddleware } from 'redux';

// 所有的 reducer
import allReducer from './reducer/index.js';

<<<<<<< HEAD:client/redux/index.js
=======
/* 中间件相关的开始 */
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/redux/index.js
// 路由信息的中间件
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();
const historyMiddleware = routerMiddleware(history);
// 异步中间件
import thunk from 'redux-thunk';
// 中间件数组
let middleware = [thunk, historyMiddleware];
<<<<<<< HEAD:client/redux/index.js

// composeEnhancers 等同于 compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

=======
/* 中间件相关的结束 */

// composeEnhancers 等同于 compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/redux/index.js
let store = createStore(
  allReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
<<<<<<< HEAD:client/redux/index.js



// 遗弃的写法
// export default function (routerReducer) {
//   return createStore(
//     allReducer,
//     composeEnhancers(
//       applyMiddleware(...middleware)
//     )
//   )
// };

=======
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8:client-react/redux/index.js
