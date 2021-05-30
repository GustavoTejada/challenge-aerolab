import { useEffect } from 'react';
import AllProducts from '../components/AllProducts/AllProducts';
import Layout from '../components/Layout/Layout'
import productService from '../services/productService';
import userService from '../services/userService';

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

export default function Home({ products = [], user = null}) {
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [])  

  return (
    <Layout>
      <AllProducts products={products}/>
    </Layout>
  );
}


export const getStaticProps = async () => {
  const resUser: any = await userService.getUser();
  const user = resUser.data;

  const resProducts: any = await productService.getProducts();
  const products: any = resProducts.data;

  return {
    props: {
      user,
      products
    }
  }
}
