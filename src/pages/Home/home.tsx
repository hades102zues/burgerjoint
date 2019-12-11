import React from 'react';
import styles from './home.module.css'

const logo = require("./assets/logo.png");
const location = require("./assets/location.png")
const burger = require("./assets/burger_photo.jpg")

const homepage:React.FC = () => (

    <div className={styles.homepage}>
        <header className={styles.header}>
            <div className={styles.wrapper}>
            <div className={styles.header_top}>
                <div className={styles.logo}>
                    <div className={styles.logo_logo}>
                        <img alt="logo_logo" src={logo} />
                    </div>
                    <p className={styles.logo_text}>Noburger</p>
                </div>
                <div className={styles.location}>
                    <div className={styles.location_icon}>
                    <img alt="location_icon" src={location} />
                    </div>
                </div>
            </div>
            <div className={styles.header_bottom}>
                <div className={styles.navigation}>
                    <ul className={styles.navigation_list}>
                        <li className={`${styles.navigation_item} ${styles.navigation_item__active}`}> Menu</li>
                        <li className={styles.navigation_item}> Team </li>
                        <li className={styles.navigation_item}> Contact </li>
                    </ul>
                </div>
                <div className = {styles.selector}>
                    <ul className={styles.selector_list}>
                        <li className={`${styles.selector_item} ${styles.selector_item__active}`}>01</li>
                        <li className={styles.selector_item}>02</li>
                        <li className={styles.selector_item}>03</li>
                        <li className={styles.selector_item}>04</li>
                    </ul>
                </div>
            </div>
            </div>
        </header>
        <div className={styles.showcase}>
            <div className={styles.showcase_img}>
                <img alt="showcase_img" src={burger} />
            </div>
            <div className={styles.showcase_info}>
                <div className={styles.showcase_info_title}>
                    <h2 className={styles.title_nummber}>01</h2>
                    <p className={styles.title_divider}>|</p>
                    <h2 className={styles.title_name}> Bacon Cheeseburger</h2>
                </div>
                <div className={styles.showcase_info_description}>
                    <h3 className={styles.description_bold}>Ingredient</h3>
                    <p className={styles.description_list}>
                        Lettuce, Tomato, Cheese, Pickles, Onions, Mushrooms, Bacon, Ketchup, Mustard <br/>
                        Optional: Cheddar, Swiss, Mozzarella, Blue Cheese, and Pepper jack.
                    </p>
                    <h3 className={styles.description_bold}> Served On.</h3>
                    <p className={styles.description_list}>Monday - Friday, 2PM - 9PM <br />Sunday, 8am - 11AM</p>
                </div>
                <div className={styles.showcase_info_button}>
                    <div className={styles.button}>
                        <p>ORDER NOW</p>
                    </div>
                </div>
                
                

            </div>
        </div>
    </div>
);

export default homepage;