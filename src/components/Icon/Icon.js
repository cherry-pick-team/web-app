import React from 'react';
import styles from './Icon.css';

const Icon = (props) => (
    <img className={styles.icon} src={props.path} style={{width: props.width}} role="presentation"/>
);

Icon.defaultProps = {
    width: '20px'
};

Icon.propTypes = {
    path: React.PropTypes.string.isRequired,
    width: React.PropTypes.string
};

export default Icon;