import React from 'react';
import styles from './Icon.styl';

const Icon = (props) => (
    <img src={props.path}/>
);

Icon.propTypes = {
    path: React.PropTypes.string.isRequired
};

export default Icon;