import React, {Component} from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  getPlaceholder() {
    if (!this.placeholder) {
      const phrases = [
        'Что ищем?',
        'Слова из песни?',
        'вордс фром ве сонг',
      ];

      this.placeholder = phrases[Math.floor(Math.random() * phrases.length)];
    }

    return this.placeholder;
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return <input
      ref={(node) => {
        this.input = node;
      }}
      type="text"
      id="search-input"
      className="search-input"
      placeholder={this.getPlaceholder()}/>;
  }
}

export default SearchInput;