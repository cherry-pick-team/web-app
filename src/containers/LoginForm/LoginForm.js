import React from 'react';
import styles from './LoginForm.css';
import { browserHistory } from 'react-router';
import Button from '../../components/Button/Button';
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
                    <Button text="VK" onClick={this.onSubmit.bind(this)} type="wrapContent"/>
                    <Button text="FB" onClick={this.onSubmit.bind(this)} type="wrapContent"/>
                    <Button text="OK" onClick={this.onSubmit.bind(this)} type="wrapContent"/>
                </div>
            </div>
        )
    }
}

