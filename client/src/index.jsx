import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import querystring from 'querystring';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (name) {
    console.log(`${name} was searched`);
    axios.post('/repos', {name})
      .then( response => console.log(response) )
      .catch( error => console.log(error) );
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
