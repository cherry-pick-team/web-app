import React from 'react';
import styles from './Button.css';
import Icon from '../Icon/Icon';

const Button = (props) => (
    <button onClick={props.onClick} className={[styles[props.type], props.inline ? styles.inline : ''].join(' ')}>

        {props.icon ? (
            <span className={styles.icon}>
                <Icon path={props.icon}/>
            </span>
        ): ''}

        <span className={styles.text}>
            {props.text}
        </span>

    </button>
);

Button.defaultProps = {
    type: 'regular',
    text: '',
    icon: '',
    onClick: () => {},
    inline: false
};

Button.propTypes = {
    type: React.PropTypes.oneOf(['primary', 'regular', 'disabled', 'wrapContent']),
    text: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    inline: React.PropTypes.bool
};

export default Button;