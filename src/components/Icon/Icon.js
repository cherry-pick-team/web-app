import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';

const Icon = (props) => (
    <img className={styles.icon} src={props.path} style={{width: props.width}} alt=""/>
);

Icon.defaultProps = {
    width: '20px'
};

Icon.propTypes = {
    path: PropTypes.string.isRequired,
    width:PropTypes.string
};

export default Icon;