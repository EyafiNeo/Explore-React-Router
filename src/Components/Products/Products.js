import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    // console.log(products.data)
    return (
        <div>
            <h1>This is products page.....</h1>
            <h3>Total products: {products.data.length}</h3>
            <div>
                {
                    products.data.map(product => <Product product = {product} key = {product.slug}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;