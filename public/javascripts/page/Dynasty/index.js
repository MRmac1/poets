import React, { PropTypes, Component } from 'react'
import AppLayout from '../../layout/AppLayout'

class DynastyContent extends Component {
  render () {
    return (
      <div>
        <h2>DynastyPage</h2>
        {"Welcome to your DynastyPage"}
      </div>
    )
  }
}

class DynastyPage extends Component {
  render () {
    return(
      <AppLayout title={'朝代列表页'} content={ <DynastyContent /> } />
    );
  }
}

export default DynastyPage;
