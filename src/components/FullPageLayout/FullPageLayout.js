import React from 'react';
import styles from './FullPageLayout.css';

const FullPageLayout = (props) => (
	<div className={styles.wrapper}>
		{props.children}
	</div>
);


export default FullPageLayout;