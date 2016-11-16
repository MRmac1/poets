import React, { PropTypes } from 'react'

class DynastyPage extends React.Component {
  render () {
    return (
      <div>
          <h2>DynastyPage</h2>
          {/* 渲染这个 child 路由组件 */}
          {this.props.children || "Welcome to your DynastyPage"}
        </div>
      );
  }
}

export default DynastyPage;
