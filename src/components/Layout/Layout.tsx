import Head from 'next/head'
import styles from './Layout.module.css'
import React, { useEffect, useState } from "react"
import { Brightness6Rounded } from '@material-ui/icons'
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from '@material-ui/core'

interface User {
    id: string;
    name: string;
    points: number;
    redeemHistory?: any[];
    createDate: string;
}


type LayoutProps = {
    title?: string,
    userData?: User
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title, userData }) => {
    const [theme, setTheme] = useState("light");

    const [user, setUser] = useState(userData);

    useEffect(() => {
        if (!localStorage.getItem("user") || localStorage.getItem("user") == "undefined") {
            localStorage.setItem("user", JSON.stringify(userData));
        } else {
            setUser(JSON.parse(localStorage.getItem("user") || "{}"))
        }

        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme") || '{}'
        );
        setTheme(localStorage.getItem("theme") || '{}');

    }, []);

    const switchTheme = () => {
        if (theme === "light") {
            saveTheme("dark");
        } else {
            saveTheme("light");
        }
    };

    const saveTheme = (theme: any) => {
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
                    {user != undefined ?
                        <><Link href={`/user/UserConfig`} key={'userConfig'} className={styles.linkUser}>
                            <div className={styles.userData}>
                                <div className={styles.userName}>{user.name}</div>
                            </div>
                        </Link>
                            <div className={styles.userPoints}>
                                <div className={styles.points}>{user.points}</div> <img src="/coin.svg" alt="points" />
                            </div> </>
                        : <></>}

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
