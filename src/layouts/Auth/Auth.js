import React from 'react';
import styles from './Auth.css';
import Card from '../../components/Card/Card';
import LoginForm from '../../containers/LoginForm/LoginForm';


const Auth = (props) => (
    <div className="auth">
        <Card>
            <div className="auth__form">
                <LoginForm/>
            </div>
        </Card>
    </div>
);

export default Auth;