// import '../../node_modules/bootstrap/scss/bootstrap.scss';
import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
          <div className="container">
            <section className="jumbotron">
              Search Github User
            </section>
          </div>
        )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
