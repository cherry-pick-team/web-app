import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialButton.css';
import Icon from '../Icon/Icon';

import iconVK from './icons/vk-logo.svg';
import iconGoogle from './icons/google-logo.svg';
import iconFB from './icons/facebook-logo.svg';

const icons = {
    VK: iconVK,
    Google: iconGoogle,
    FB: iconFB
};

const text = {
    VK: 'Вконтакте',
    Google: 'Google',
    FB: 'Facebook'
};

const SocialButton = (props) => (
    <button onClick={props.onClick} className={styles.button}>

        <Icon path={icons[props.type]}/>

        <span className={styles.text}>
            {text[props.type]}
        </span>

    </button>
);

SocialButton.defaultProps = {
    onClick: () => {}
};

SocialButton.propTypes = {
    type: PropTypes.oneOf(['VK', 'Google', 'FB']).isRequired,
    onClick: PropTypes.func
};

export default SocialButton;