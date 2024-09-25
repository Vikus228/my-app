"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import React from 'react';
import styles from './basketPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'; 

const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>CartestShop</h1>
                <nav>
                    <ul className={styles.navList}>
                        <Link href="/main">
                            <li className={styles.navItem}>Home</li>
                        </Link>
                        <li className={styles.navItem}><a href="#">About</a></li>
                        <li className={styles.navItem}><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className={styles.additionalControls}>
                <div className={styles.searchBox}>
                    <input type="text" className={styles.searchInput} placeholder="Поиск..." />
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                </div>
                <div className={styles.userActions}>
                    <Link href="/registration">
                    <div className={styles.actionItem}>
                        <FontAwesomeIcon icon={faUser} className={styles.icon} />
                        <span>Войти</span>
                    </div>
                    </Link>
                    <div className={styles.actionItem}>
                        <FontAwesomeIcon icon={faShoppingBag} className={styles.icon} />
                        <span>Заказы</span>
                    </div>
                    <div className={styles.actionItem}>
                        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                        <span>Избранное</span>
                    </div>
                </div>
            </div>
        </>
    );
};

const Basket = () => {
    const cartItems = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            brand: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: 30000
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            brand: 'Honda',
            model: 'Civic',
            year: 2019,
            price: 25000
        },
    ];

    return (
        <div className={styles.cartPage}>
            <h2 className={styles.cartTitle}>Корзина</h2>
            <div className={styles.cartContainer}>
                <div className={styles.cartItems}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.image} alt={`${item.brand} ${item.model}`} className={styles.cartItemImage} />
                            <div className={styles.cartItemDetails}>
                                <h4>{item.brand} {item.model}</h4>
                                <p>Год выпуска: {item.year}</p>
                                <p>Цена: ${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Card className={styles.cartSummary}>
                    <CardHeader className="flex flex-col items-center">
                        <Link href="/order">
                            <Button className="rounded-lg bg-blue-500 text-white px-4 py-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Перейти к оформлению
                            </Button>
                        </Link>
                    </CardHeader>
                    <CardContent className={`${styles.cartContent} pt-2`}>
                        <CardTitle className={styles.cartTitleSmall}>Ваша корзина</CardTitle>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span className={styles.cartItemsSmall}>товары (2)</span>
                            <span className="text-black font-bold">55 000 $</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

const Page: React.FC = () => {
    return (
        <>
            <Header />
            <Basket />
        </>
    );
};

export default Page;