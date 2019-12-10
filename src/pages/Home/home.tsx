import React from 'react';
import styles from './home.module.css'

const homepage:React.FC = () => (

    <div className={styles.homepage}>
        <header className={styles.header}>
            <div className={styles.wrapper}>
            <div className={styles.header_top}>
                <div className={styles.logo}>
                    <div className={styles.logo_logo}>
                        <img alt="logo_logo" src="" />
                    </div>
                    <p className={styles.logo_text}>No Burger</p>
                </div>
                <div className={styles.location}>
                    <div className={styles.location_icon}>
                    <img alt="location_icon" src="" />
                    </div>
                </div>
            </div>
            <div className={styles.header_bottom}>
                <div className={styles.navigation}>
                    <ul className={styles.navigation_list}>
                        <li className={styles.navigation_item}> Menu</li>
                        <li className={styles.navigation_item}> Team </li>
                        <li className={styles.navigation_item}> Contact </li>
                    </ul>
                </div>
                <div className = {styles.selector}>
                    <ul className={styles.selector_list}>
                        <li className={styles.selector_item}>01</li>
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
                <img alt="showcase_img" />
            </div>
            <div className={styles.showcase_info}>
                <div className={styles.showcase_info_title}>
                    <h2 className={styles.title_nummber}>01</h2>
                    <p className={styles.title_divider}>|</p>
                    <h2 className={styles.title_name}> Bacon Cheeseburger</h2>
                </div>
                <div className={styles.showcase_info_description}>
                    <h3 className={styles.description_bold}>Ingredient</h3>
                    <p className={styles.description_list}>Lettuce, Tomato, Cheese, Chili, Pickles, Onions, Mushrooms, Bacon, Turkey</p>
                    <h3 className={styles.description_bold}> Served On.</h3>
                    <p className={styles.description_list}>Lettuce, Tomato, Cheese, Chili, Pickles, Onions, Mushrooms, Bacon, Turkey</p>
                </div>
                <div className={styles.showcase_info_button}>
                    <div className={styles.button}>
                        <p>Order Now</p>
                    </div>
                </div>
                
                

            </div>
        </div>
    </div>
);

export default homepage;