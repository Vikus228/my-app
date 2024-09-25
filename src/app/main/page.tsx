"use client";

import React, { useState } from 'react';
import { getPostApiV1OrderAddMock } from '@/api/carshop';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faHeart, faShoppingCart, faSearch, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'; 

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>CarShop</h1>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="#">Home</a></li>
                    <li className={styles.navItem}><a href="#">About</a></li>
                    <li className={styles.navItem}><a href="#">Contact</a></li>
                </ul>
            </nav>
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
                    <Link href="/basket">
                        <div className={styles.actionItem}>
                            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
                            <span>Корзина</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

const Main: React.FC = () => {
    const [delivery, setDelivery] = useState(false);
    const [inStock, setInStock] = useState(false);
    const [showMoreBrands, setShowMoreBrands] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [orderResponse, setOrderResponse] = useState<any>(null);

    const brands = ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Ford", "Nissan", "Hyundai", "Kia", "Mazda"];

    const handleBrandSelection = (brand: string) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const handleBuyClick = (carIndex: number) => {
        const response = getPostApiV1OrderAddMock();
        console.log(`Order created for Car ${carIndex + 1}:`, response);
        setOrderResponse(response);
    };

    return (
        <div className={styles.main}>
            <aside className={styles.filters}>
                <h6>Автомобили</h6>
                <div className={styles.filter}>
                    <h3>Цена</h3>
                    <input
                        type="range"
                        min="0"
                        max="1000000"
                        step="10000"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className={styles.rangeInput}
                    />
                    <div className={styles.priceInputWrapper}>
                        <label>
                            От
                            <input
                                type="number"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className={styles.priceInput}
                            />
                        </label>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1000000"
                        step="10000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className={styles.rangeInput}
                    />
                    <div className={styles.priceInputWrapper}>
                        <label>
                            До
                            <input
                                type="number"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className={styles.priceInput}
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.filter} onClick={() => setDelivery(!delivery)}>
                    <h3>Доставка</h3>
                    <FontAwesomeIcon icon={delivery ? faCheckSquare : faSquare} className={styles.checkboxIcon} />
                </div>
                <div className={styles.filter} onClick={() => setInStock(!inStock)}>
                    <h3>В наличии</h3>
                    <FontAwesomeIcon icon={inStock ? faCheckSquare : faSquare} className={styles.checkboxIcon} />
                </div>
                <div className={styles.filter}>
                    <h3>Бренд</h3>
                    <ul>
                        {brands.slice(0, showMoreBrands ? brands.length : 5).map((brand) => (
                            <li key={brand} className={styles.brandItem} onClick={() => handleBrandSelection(brand)}>
                                <FontAwesomeIcon icon={selectedBrands.includes(brand) ? faCheckSquare : faSquare} className={styles.checkboxIcon} />
                                <span>{brand}</span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setShowMoreBrands(!showMoreBrands)}>
                        {showMoreBrands ? "Скрыть" : "Показать еще"}
                    </button>
                </div>
            </aside>
            <section className={styles.cars}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className={styles.carCard}>
                        <img src={`https://via.placeholder.com/150?text=Car+${index + 1}`} alt={`Car ${index + 1}`} />
                        <div className={styles.carDetails}>
                            <h4>Car {index + 1}</h4>
                            <p>Цена: $10000</p>
                            <button onClick={() => handleBuyClick(index)}>Купить</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

const Page: React.FC = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    );
};

export default Page;