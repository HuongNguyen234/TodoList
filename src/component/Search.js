import { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strValue : ""
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleClear(){
    this.setState({
      strValue : ""
    });
    this.props.onClickSearch("");
  }

  handleChange(event) {
    this.setState({strValue: event.target.value});
    
  }

  handleSearch(){
    this.props.onClickSearch(this.state.strValue);
  }

  render() {
    return (
      <div className="input-group col-3 search-group">
        <input type="text" value={this.state.strValue} onChange={this.handleChange} placeholder="Search for..." aria-label="First name" className="form-control" />
        <button onClick={this.handleClear} className="btn btn-warning" type="submit">Clear</button>
        <button onClick={this.handleSearch} className="btn btn-primary" type="submit">Search</button>
      </div>
    )
  }

}

export default Search;
