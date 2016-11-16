import React, { PropTypes } from 'react'

class AuthorPage extends React.Component {
  render () {
    return(
      <div>
        <h2>AuthorPage</h2>
        {/* 渲染这个 child 路由组件 */}
        {this.props.children || "Welcome to your AuthorPage"}
      </div>
    );
  }
}

export default AuthorPage;
