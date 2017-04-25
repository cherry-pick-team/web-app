import React from 'react';
import styles from './HeadMenu.css';
import {Link} from 'react-router-dom';
import Icon from '../Icon/Icon';

const HeadMenu = (props) => (
	<div className={styles.container}>
		<div className={styles.logo}>
			<Icon path="brandLogo.svg"/>
		</div>
		<div className={styles.menuItem}>
			<Link to="trending" > Top songs </Link>
		</div>
		<div className={styles.menuItem}>
			<Link to="apps" > Apps </Link>
		</div>
		<div className={styles.divider}/>
		<div className={styles.menuItem}>
			<Link to="sign-up" > Sign In </Link>
		</div>
		<div className={styles.menuItem}>
			<Link to="sign-in" > Sign Up </Link>
		</div>
	</div>
);


export default HeadMenu;