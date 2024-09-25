"use client";

import { getPostApiV1UserRegisterMock } from '@/api/carshop';
import React, { useState } from 'react';
import styles from './registration.module.css'; 

const RegistrationForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setError('');

        if (password !== repeatPassword) {
            setError('Пароли не совпадают');
            return;
        }

        const response = getPostApiV1UserRegisterMock();
        console.log('Регистрация пользователя:', response);
        if (response.code === 200) {
            console.log('Пользователь успешно зарегистрирован');
            setUsername('');
            setPassword('');
            setRepeatPassword('');
        } else {
            setError(`Ошибка регистрации: ${response.msg}`);
        }
    };

    return (
        <div className={styles.registrationForm}>
            <h2>Регистрация</h2>
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
                <div className={styles.formGroup}>
                    <label htmlFor="repeatPassword">Повторите пароль</label>
                    <input
                        type="password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Зарегистрироваться</button>
            </form>
            {error && <div className={styles.errorMessage}>{error}</div>}
            <div className={styles.loginLink}>
                <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
            </div>
        </div>
    );
};

export default RegistrationForm;