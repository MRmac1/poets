import React, { PropTypes, Component } from 'react'
import AppLayout from '../../layout/AppLayout'

class AuthorContent extends Component {
  render () {
    return (
      <div>
        <h2>DynastyPage</h2>
        {"Welcome to your AuthorPage"}
      </div>
    )
  }
}

class AuthorPage extends Component {
  render () {
    return(
      <AppLayout title={'作者列表页'} content={ <AuthorContent /> } />
    );
  }
}

export default AuthorPage;
