import { Grid, Container, Modal } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Router from 'next/router'
import styles from './AllProducts.module.css'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useEffect, useState } from 'react';
import productService from '../../services/productService';
import userService from '../../services/userService';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface Product {
    _id:      string;
    name:     string;
    cost:     number;
    category: string;
    img:      Img;
}

export interface Img {
    url:   string;
    hdUrl: string;
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const orderBy = (products: any, value: any, direction: any) => {
    if (direction === "asc") {
        return [...products].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "desc") {
        return [...products].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }

    return products;
}


const AllProducts = ({ products = [] }) => {
    const [value, setValue] = useState();
    const [direction, setDirection] = useState();

    const [user, setUser] = useState({
        name: '',
        points: 0
    });

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") || '{}'));
    }, []);

    const [open, setOpen] = useState({
        open: false,
        product: {
            _id: null,
            cost: 0,
            name: null
        }
    });

    const [openAlert, setOpenAlert] = useState(false);

    const handleOpenAlert = () => {
        setOpenAlert(true);
    }

    const handleCloseAlert = () => {
        setOpenAlert(false);
        Router.reload();
    }


    const handleOpen = (product: any) => {
        setOpen({
            open: true,
            product: product
        });
    };

    const handleClose = () => {
        setOpen({
            open: false,
            product: {
                _id: null,
                cost: 0,
                name: null
            }
        });
    };

    const redeemProduct = async () => {
        setLoading(true);
        let body = {
            productId: open.product._id
        }
        let response: any = await productService.redeemProduct(body);
        if (response.status == 200) {
            getUserData();
        }
    }

    async function getUserData() {
        let resUser: any = await userService.getUser();
        localStorage.setItem("user", JSON.stringify(resUser.data));
        handleClose();
        handleOpenAlert();
        setLoading(false);
    }

    const orderedProducts = orderBy(products, value, direction);

    const setValueAndDirection = (value: any, direction: any) => {
        setDirection(direction);
        setValue(value);
    };

    let body = (
        <div className={styles.paper}>
            <h2 id="simple-modal-title">¿Estás seguro que deseas canjear {open.product.cost} <img className={styles.pointsModal} src="coin.svg" alt="points" /> por {open.product.name}?</h2>
            <p id="simple-modal-description">
                Te quedan {user.points - open.product.cost} <img className={styles.pointsModal} src="coin.svg" alt="points" />
            </p>
            {loading == true ?
                <div className={styles.modal}>
                    <CircularProgress />
                </div> :
                <div className={styles.modal}>
                    <button onClick={() => { handleClose() }} className={styles.buttonCancel}>Cancelar</button>
                    <button onClick={() => { redeemProduct() }} className={styles.buttonConfirm}>Confirmar</button>
                </div>
            }
        </div>
    );


    return (
        <div className={styles.centered}>
            <div className={styles.contentBanner}>
                <img className={styles.banner} src="header-x1.png" />
                <Container className={styles.overlayBanner}>
                    <h2 className={styles.textBanner}>Electronics</h2>
                </Container>
            </div>
            <Container>
                <div className={styles.counts}>Se encontraron {products.length} productos</div>
                <div className={styles.ordered}>
                    <span>Ordenar por:</span>
                    <button className={direction !== 'asc' ? styles.buttonOrder : styles.buttonActive} onClick={() => setValueAndDirection("cost", "asc")}>Menor precio</button>
                    <button className={direction !== 'desc' ? styles.buttonOrder : styles.buttonActive} onClick={() => setValueAndDirection("cost", "desc")}>Mayor precio</button>
                </div>

                <Grid container spacing={3} justify="center">
                    {orderedProducts.map((product: any, index: any) => (
                        <Grid item xs={6} md={3} key={index}>
                            <div className={styles.card}>
                                <img className={styles.img} src={product.img.url} alt={product.name} />
                                <hr />
                                <div className={styles.category}>
                                    {product.category}
                                </div>
                                <div className={styles.text}>
                                    {product.name}
                                </div>
                                {user.points >= product.cost ? <LocalMallIcon className={styles.iconMall} /> :
                                    <div className={styles.userPoints}>
                                        <div className={styles.restPoints}>Necesitas {product.cost - user.points}</div> <img src="coin.svg" alt="points" />
                                    </div>
                                }

                                <div className={styles.overlayCard}>
                                    <div className={styles.contentOverlayCard}>
                                        <div className={styles.points}>
                                            <span>{product.cost}</span> <img src="coin.svg" alt="points" />
                                        </div>
                                        {user.points >= product.cost ? <button className={styles.buttonRedeem} onClick={() => { handleOpen(product) }}>Reclamar</button> : <button className={styles.errorButton}>Puntos insuficientes</button>}

                                    </div>
                                    {user.points >= product.cost && <LocalMallIcon className={styles.iconMallOverlay} />}
                                </div>
                            </div>
                        </Grid>
                    ))}
                    <Modal
                        className={styles.modal}
                        open={open.open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                    <Snackbar open={openAlert} autoHideDuration={1000} onClose={handleCloseAlert}>
                        <Alert onClose={handleCloseAlert} severity="success">
                            Producto canjeado exitosamente!
                        </Alert>
                    </Snackbar>
                </Grid>
            </Container>
        </div>
    );
}

export default AllProducts;
