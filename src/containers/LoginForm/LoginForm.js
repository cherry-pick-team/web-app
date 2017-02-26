import React from 'react';
import styles from './LoginForm.css';
import Button from '../../components/Button/Button';
import SocialButton from '../../components/SocialButton/SocialButton';
import Input from '../../components/Input/Input';

export default class LoginForm extends React.Component {
    onLoginChange() {

    }

    onPasswordChange() {

    }

    onSubmit() {

    }

    render () {
        return (
            <div>
                <div className={styles.title}> Войти </div>
                <Input onChange={this.onLoginChange.bind(this)} placeholder="Логин"/>
                <Input onChange={this.onPasswordChange.bind(this)} password placeholder="Пароль"/>
                <Button text="Войти" onClick={this.onSubmit.bind(this)}/>
                <div className={styles.socialAuth}>
                    <SocialButton type="VK"/>
                    <SocialButton type="FB"/>
                    <SocialButton type="Google"/>
                </div>
            </div>
        )
    }
}

