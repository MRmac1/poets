import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import '../../style/app.css';

//整个应用的模板
class AppLayout extends React.Component {
  render () {
      return (
        <div>
          <h1>poets App</h1>
          <ul>
            <li><Link to="/author">作者</Link></li>
            <li><Link to="/dynasty">朝代</Link></li>
          </ul>
          {/*
            接着用 `this.props.children` 替换 `<Child>`
            router 会帮我们找到这个 children
          */}
          {this.props.children || "Welcome to poets App"}
      </div>
    );
  }
}

export default AppLayout;
