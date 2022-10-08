import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const productDetail = useLoaderData();
    const {data} = productDetail;
    console.log(data);
    return (
        <div>
            <h1>Iphone er details jante aisos???</h1>
            <img src = {data.image} alt="I phone" />
            <h2>{data.name}</h2>
            <p>Storage: {data.mainFeatures.storage}</p>
            <p>Display: {data.mainFeatures.displaySize}</p>
            <p>Chipset: {data.mainFeatures.chipSet}</p>
        </div>
    );
};

export default ProductDetails;