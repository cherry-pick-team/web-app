import React from 'react';
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
    level: React.PropTypes.oneOf([1, 2, 3]),
    bgColor: React.PropTypes.string
};

export default Card;