import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import Icon from '../Icon/Icon';

const Button = (props) => (
    <button onClick={props.onClick} className={styles[props.type]}>

        {props.icon ? (
            <span className={styles.icon}>
                <Icon path={props.icon}/>
            </span>
        ) : ''}

        <span className={styles.text}>
            {props.text}
        </span>

    </button>
);

Button.defaultProps = {
    type: 'regular',
    text: '',
    icon: '',
    onClick: () => {
    },
    inline: false
};

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'regular', 'disabled', 'wrapContent']),
    text: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    inline: PropTypes.bool
};

export default Button;