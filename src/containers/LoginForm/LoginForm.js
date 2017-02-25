import React from 'react';
import styles from './LoginForm.css';
import Button from '../../components/Button/Button';

export default class LoginForm extends React.Component {
    render () {
        return (
            <div>
                <div>
                    Логин
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    Пароль
                </div>
                <div>
                    <input type="text"/>
                </div>
                <Button text="Войти"/>
                <Button text="Назад"/>
            </div>
        )
    }
}

