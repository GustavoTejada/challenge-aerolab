import { useEffect } from 'react';
import AllProducts from '../components/AllProducts/AllProducts';
import Layout from '../components/Layout/Layout'
import productService from '../services/productService';
import userService from '../services/userService';

export default function Home({ products = null, user = null}) {
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
  const products = resProducts.data;

  return {
    props: {
      user,
      products
    }
  }
}
