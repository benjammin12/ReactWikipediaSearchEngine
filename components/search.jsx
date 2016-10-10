import React from 'react';

class Search extends React.Component {
  constructor(){
    super();
    this.state={
      searchTerm: ''
    };

  }

  searchUpdate(event) {
    this.setState({
      searchTerm: event, target, value
    });
  }

  submitForm(event){
    event.preventDefault();

    this.setState({searchTerm: ''});
  }

  render() {

    return (
      <div className="container">
        <form>
          <input className="search-box-text" type="text" placeholder="Search"
          onChange={this.searchUpdate.bind(this)} value={this.state.searchTerm}/>
        </form>
    </div>
    );

  }
}

export default Search;
