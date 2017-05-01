import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PopularSearchLink.css';

class PopularSearchLink extends Component {
  render() {
    return <a href="/" className="popular-search-link">{this.props.text}</a>;
  }
}

PopularSearchLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PopularSearchLink;