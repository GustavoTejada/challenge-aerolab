import styles from './UserConfig.module.css';
import { useState, useEffect } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Container } from '@material-ui/core';
import Layout from '../../components/Layout/Layout';
import { KeyboardArrowDownRounded } from "@material-ui/icons";
import { KeyboardArrowUpRounded } from "@material-ui/icons";
import productService from '../../services/productService';
import userService from '../../services/userService';
import Router from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const orderBy = (products, value, direction) => {
    if (direction === "asc") {
        return [...products].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "desc") {
        return [...products].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }

    return products;
};

const SortArrow = ({ direction }) => {
    if (!direction) {
        return <></>;
    }

    if (direction === "desc") {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRounded color="inherit" />
            </div>
        );
    } else {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpRounded color="inherit" />
            </div>
        );
    }
};


const UserConfig = () => {

    const [user, setUser] = useState({
        name: '',
        points: 0,
        redeemHistory: []
    });

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const orderedProducts = orderBy(user.redeemHistory, value, direction);

    const switchDirection = () => {
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc");
        } else {
            setDirection(null);
        }
    };

    const setValueAndDirection = (value) => {
        switchDirection();
        setValue(value);
    };

    function formatDate(string = '') {
        return new Date(string).toLocaleDateString([]);
    }

    const [loading, setLoading] = useState(false);

    const [openAlert, setOpenAlert] = useState(false);

    const handleOpenAlert = () => {
        setOpenAlert(true);
    }

    const handleCloseAlert = () => {
        setOpenAlert(false);
        Router.reload();
    }

    const addPoints = async (value: number) => {
        setLoading(true);
        let points = {
            amount: value
        }
        let response: any = await userService.addPoints(points);
        if (response.status == 200) {
            getUserData();
        }
    }

    async function getUserData() {
        let resUser: any = await userService.getUser();
        localStorage.setItem("user", JSON.stringify(resUser.data));
        setLoading(false);
        handleOpenAlert();
    }

    return (
        <Layout>
            <Container>
                <div className={styles.ordered}>
                    <span>Agregar puntos:</span>
                    {
                        loading == true ?
                            <CircularProgress className={styles.spinner} /> :
                            <>
                                <button className={styles.buttonPoints} onClick={() => addPoints(1000)}>1000</button>
                                <button className={styles.buttonPoints} onClick={() => addPoints(5000)}>5000</button>
                                <button className={styles.buttonPoints} onClick={() => addPoints(7500)}>7500</button>
                            </>
                    }
                </div>
                <hr />
                <div>Historial de productos canjeados:</div>
                <div className={styles.heading}>
                    <button className={styles.heading_name}
                        onClick={() => setValueAndDirection("name")}>
                        <div>Nombre</div>
                        {value === 'name' && <SortArrow direction={direction} />}

                    </button>
                    <button className={styles.heading_cost}
                        onClick={() => setValueAndDirection("cost")}>
                        <div>Precio / Puntos</div>
                        {value === 'cost' && <SortArrow direction={direction} />}

                    </button>
                    <button className={styles.heading_date}
                        onClick={() => setValueAndDirection("createDate")}>
                        <div>Fecha</div>
                        {value === 'createDate' && <SortArrow direction={direction} />}

                    </button>
                </div>
                <div>
                    {orderedProducts.map((product) => (
                        <div className={styles.row}>
                            <div className={styles.flex4}>{product.name}</div>
                            <div className={styles.flex4}>{product.cost}</div>
                            <div className={styles.flex4}>{formatDate(product.createDate)}</div>
                        </div>
                    ))}
                </div>
                <Snackbar open={openAlert} autoHideDuration={1000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="success">
                        Puntos agregados exitosamente!
                        </Alert>
                </Snackbar>
            </Container>
        </Layout>
    );
}

export default UserConfig;