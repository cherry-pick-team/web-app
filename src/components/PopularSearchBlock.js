import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PopularSearchLink from "./PopularSearchLink";
import './PopularSearchBlock.css';

class PopularSearchBlock extends Component {
  render() {
    return <div className="popular-search-block">{'Популярные запросы: '}
      {this.props.queries.map((query) => {
        return <span>
          <PopularSearchLink text={query}/>{ '  ' }
        </span>;
      })}
    </div>;
  }
}

PopularSearchBlock.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string),
};

export default PopularSearchBlock;