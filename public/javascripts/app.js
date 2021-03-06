// import '../../node_modules/bootstrap/scss/bootstrap.scss';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//配置路由
import AppLayout from './layout/AppLayout'
import Home from './page/Home/'
import Author from './page/Author/'
import Dynasty from './page/Dynasty/'

render(
 <Router history={browserHistory}>
   <Route path="/">
     <IndexRoute component={Home} />
     <Route path="author" component={Author} />
     <Route path="dynasty" component={Dynasty} />
   </Route>
 </Router>,
 document.body
);
