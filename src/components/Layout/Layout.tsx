import Head from 'next/head'
import styles from './Layout.module.css'
import React, { useEffect, useState } from "react"
import { Brightness6Rounded } from '@material-ui/icons'
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from '@material-ui/core'

type LayoutProps = {
    title?: string,
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => {
    const [theme, setTheme] = useState("light");

    const [user, setUser] = useState({
        name: '',
        points: 0
    });
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme") || '{}'
        );

        setTheme(localStorage.getItem("theme") || '{}');
        setUser(JSON.parse(localStorage.getItem("user") || '{}'));
    }, []);

    const switchTheme = () => {
        if (theme === "light") {
            saveTheme("dark");
        } else {
            saveTheme("light");
        }
    };

    const saveTheme = (theme : any) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div>
                    <Link href="/">
                        <img className={styles.logo} src="/aerolab-logo.svg" alt="Aerloab" />
                    </Link>
                    <button className={styles.themeSwitcher} onClick={switchTheme}>
                        <Brightness6Rounded></Brightness6Rounded>
                    </button>
                </div>
                <div>
                    <Link href={`/user/UserConfig`} key={'userConfig'} className={styles.linkUser}>
                        <div className={styles.userData}>
                            <SettingsIcon className={styles.userIcon} /> <div className={styles.userName}>{user.name}</div>
                        </div>
                    </Link>
                        <div className={styles.userPoints}>
                            <div className={styles.points}>{user.points}</div> <img src="/coin.svg" alt="points" />
                        </div>
                </div>
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                Gustavo Tejada @ Challenge Aerolab
            </footer>
        </div>
    )
}

export default Layout;
