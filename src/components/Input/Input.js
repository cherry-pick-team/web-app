import React from 'react';
import styles from './Input.css';

const Input = (props) => (
    <input
        className="input"
        onChange={props.onChange}
        placeholder={props.placeholder}/>
);

Input.defaultProps = {
    placeholder: '',
    password: false,
    onChange: () => {}
};

Input.propTypes = {
    placeholder: React.PropTypes.string,
    password: React.PropTypes.bool,
    onChange: React.PropTypes.func
};

export default Input;