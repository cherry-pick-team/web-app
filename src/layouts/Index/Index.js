import React from 'react';
import styles from './Index.styl';
import { Link } from 'react-router';
import Button from '../../components/Button/Button';

const Index = (props) => (
    <div>
        Index route
        <Link to="/auth">
            <Button text="auth"/>
        </Link>
    </div>
);

export default Index;