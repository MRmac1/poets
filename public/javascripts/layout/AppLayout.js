import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './layout.scss';

//整个应用的模板
class AppLayout extends React.Component {
  render () {
      return (
        <div className="root">
          <section className="title">{this.props.title || 'title'}</section>
          <ul>
            <li><Link to="/author">author</Link></li>
            <li><Link to="/dynasty">dynasty</Link></li>
            <li><Link to="/">home</Link></li>
          </ul>
          { this.props.content }
      </div>
    );
  }
}

export default AppLayout;
