"use client";

import { getGetApiV1UserAuthCodeMock } from '@/api/carshop';
import React, { useState } from 'react';
import styles from './login.module.css'; 

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const response = getGetApiV1UserAuthCodeMock();
        console.log('Ответ от сервера:', response);
        if (response.code === 200) {
            console.log('Пользователь успешно авторизован');
        } else {
            console.error('Ошибка авторизации:', response.msg);
        }
    };

    return (
        <div className={styles.loginForm}>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Имя пользователя</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Войти</button>
            </form>
            <div className={styles.registerLink}>
                <p>Нет аккаунта? <a href="/registration">Зарегистрироваться</a></p>
            </div>
        </div>
    );
};

export default LoginForm;