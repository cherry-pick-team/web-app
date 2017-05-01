import React, {Component} from 'react';
import './SearchForm.css';
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

class SearchForm extends Component {
  render() {
    return <div className="search-form">
      <SearchInput/>
      <SearchButton/>
    </div>;
  }
}

export default SearchForm;