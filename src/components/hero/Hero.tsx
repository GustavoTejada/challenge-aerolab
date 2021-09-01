import React from 'react';
import styles from './Hero.module.css';
import { Grid, Container, Modal } from '@material-ui/core';


const Hero = () => {
    return (
        <div className={styles.contentBanner}>
            <img className={styles.banner} src="header-x1.png" />
            <Container className={styles.overlayBanner}>
                <h2 className={styles.textBanner}>Electronics</h2>
            </Container>
        </div>
    )
}

export default Hero;
