import { useEffect } from 'react';
import AllProducts from './allProducts/AllProducts';
import Layout from '../components/Layout/Layout'
import productService from '../services/productService';
import userService from '../services/userService';

interface User {
  id:            string;
  name:          string;
  points:        number;
  redeemHistory? : any[];
  createDate:    string;
}

const userInfo: User = {
  id: '',
  name: '',
  points: 0,
  createDate: ''
}



export default function Home({ products = [], user = userInfo}) {

  return (
    <Layout userData={user}>
      <AllProducts products={products} userData={user}/>
    </Layout>
  );
}


export const getStaticProps = async () => {
  const resUser: any = await userService.getUser();
  const user: any = resUser.data;

  const resProducts: any = await productService.getProducts();
  const products: any = resProducts.data;

  return {
    props: {
      user,
      products
    }
  }
}
