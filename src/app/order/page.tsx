"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './order.module.css';

const Header: React.FC = () => {
    const [deliveryMethod, setDeliveryMethod] = useState('pickup');

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>CarShop</h1>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="/main">Home</Link></li>
                        <li className={styles.navItem}><Link href="/about">About</Link></li>
                        <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.mainColor}>
                <div className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <div className={styles.cardContainer}>
                            <div className={styles.carouselContainer}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className={styles.payment}>Способ оплаты</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Carousel>
                                            <CarouselContent className={styles.carouselContent}>
                                                <CarouselItem className={`${styles.carouselItem1} basis-1/3`}>
                                                    <img src="https://via.placeholder.com/250x150" alt="Image 1" className="w-250 h-150 object-cover" />
                                                </CarouselItem>
                                                <CarouselItem className={`${styles.carouselItem} basis-1/3`}>
                                                    <img src="https://via.placeholder.com/250x150" alt="Image 2" className="w-250 h-150 object-cover" />
                                                </CarouselItem>
                                                <CarouselItem className={`${styles.carouselItem} basis-1/3`}>
                                                    <img src="https://via.placeholder.com/250x150" alt="Image 3" className="w-250 h-150 object-cover" />
                                                </CarouselItem>
                                            </CarouselContent>
                                        </Carousel>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className={`${styles.cardContainer} ${styles.receivingCard}`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle className={styles.cardTitle}>
                                        <p>Способ получения</p>
                                        <div className={styles.buttonGroup}>
                                            <button
                                                className={`${styles.button} ${deliveryMethod === 'pickup' ? styles.active : ''}`}
                                                onClick={() => setDeliveryMethod('pickup')}
                                            >
                                                Самовывоз
                                            </button>
                                            <button
                                                className={`${styles.button} ${deliveryMethod === 'delivery' ? styles.active : ''}`}
                                                onClick={() => setDeliveryMethod('delivery')}
                                            >
                                                Доставка
                                            </button>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className={styles.cardContent}>
                                    <div className={styles.addressContainer}>
                                        <div>
                                            <p className={`${styles.cardText} ${styles.boldText}`}>Пункт Carshop</p>
                                            <p className={`${styles.cardText} ${styles.addressText}`}>Московская область, Лобня, Текстильная улица, 18</p>
                                        </div>
                                        <p className={`${styles.cardText} ${styles.cardLink}`}>Изменить</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <Card className={styles.payCard}>
                            <CardContent>
                                <button className={styles.catalogButton2}>Оплатить онлайн</button>
                                <p className={`${styles.smallText} ${styles.cardText}`}>Нажимая на кнопку, вы соглашаетесь c Условиями обработки персональных данных, а также с Условиями продажи</p>
                                <div className={`${styles.itemRow} ${styles.cardText}`}>
                                    <p className={`${styles.boldText} ${styles.cardText}`}>Ваш заказ</p>
                                </div>
                                <div className={`${styles.itemRow} ${styles.cardText}`}>
                                    <p className={`${styles.boldText}`}>Итого</p>
                                    <p className={styles.cardText}>1 814 $</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Header;