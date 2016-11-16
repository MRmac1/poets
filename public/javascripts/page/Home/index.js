import React, { PropTypes } from 'react'

class HomePage extends React.Component {
  render () {
    return(
      <div>
        <h2>HomePage</h2>
        {/* 渲染这个 child 路由组件 */}
        {this.props.children || "Welcome to your HomePage"}
      </div>
    );
  }
}

export default HomePage;
