import React from 'react';
import styles from './LoginForm.css';
import { Link } from 'react-router';
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
                <div>
                    Логин
                </div>
                <div>
                    <Input onChange={this.onLoginChange.bind(this)} />
                </div>
                <div>
                    Пароль
                </div>
                <div>
                    <Input onChange={this.onPasswordChange.bind(this)} password/>
                </div>
                <Button text="Войти" onClick={this.onSubmit.bind(this)}/>
                <Link to="/"> <Button text="Назад"/> </Link>
            </div>
        )
    }
}

