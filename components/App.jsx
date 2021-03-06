import React from 'react';
import Wikipedia from './wikipediafile.jsx';

class App extends React.Component {
   render() {

     var myStyle = {
        fontSize: 25,
        color: '#FF0000'
     }

     var searchReady = true;

      return (
         <div className="container">
            <Header />
            <Body />
            <Wikipedia />
         </div>
      );
   }
}

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Hello Wiki</h1>
      </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <a href="http://en.wikipedia.org/wiki/Special:Random" className="btn btn-info" type="button" target="_blank">Random Search </a>

      </div>
    );
  }
}


export default App;
