import React, { PropTypes } from 'react'
//引入layout模板
import AppLayout from '../../layout/AppLayout'

class HomeContent extends React.Component {
  render () {
    return (
      <div>
        <h2>HomePage</h2>
        {"Welcome to your HomePage"}
      </div>
    )
  }
}

class HomePage extends React.Component {
  render () {
    return(
      <AppLayout title={'古时候的故事'} content={ <HomeContent /> } />
    );
  }
}

export default HomePage;
