import React from 'react';
import styles from './Button.styl';
import Icon from '../Icon/Icon';

const Button = (props) => (
    <button onClick={props.onClick} className={'button ' + 'button__' + props.type}>

        {props.icon ? (
            <span className="button__icon">
                <Icon path={props.icon}/>
            </span>
        ): ''}

        <span className="button__text">
            {props.text}
        </span>

    </button>
);

Button.defaultProps = {
    type: 'regular',
    text: '',
    icon: '',
    onClick: () => {}
};

Button.propTypes = {
    type: React.PropTypes.oneOf(['primary', 'regular', 'disabled']),
    text: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default Button;