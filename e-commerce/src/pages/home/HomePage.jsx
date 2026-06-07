import axios from 'axios'
import './HomePage.css';
import { Header } from '../../component/Header';
// import {products} from '../../starting-code/data/products'
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({cart}){

    // fetch('http://localhost:3000/api/products')
    // .then( (response) => {
    //     response.json().then( (data) => {
    //       console.log(data);
    //     } );  
    // })
    const [products,setProducts] = useState([])
    useEffect(() => {
      const getHome = async () => {
        const response = await axios.get('/api/products')
        setProducts(response.data)
      }
      getHome()
    },[])
     

    return(
    <>
    <title>E-Commerce Project</title>
      <Header cart={cart} />
    <div className="home-page">
      <ProductsGrid products={products} />
    </div>
    </>
    );
}