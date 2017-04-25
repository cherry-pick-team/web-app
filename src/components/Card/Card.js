import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

const Card = (props) => (
    <div className={styles.card + ' ' + styles['card_level-' + props.level]} style={{backgroundColor : props.bgColor}}>
        {props.children}
    </div>
);

Card.defaultProps = {
    level: 1,
    bgColor: 'white'
};

Card.propTypes = {
    level: PropTypes.oneOf([1, 2, 3]),
    bgColor: PropTypes.string
};

export default Card;