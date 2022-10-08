import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {brand,phone_name,slug} = props.product;

    const navigate = useNavigate()
    const clickHandler = ()=>{
        navigate(`/products/${slug}`);
    }
    return (
        <div>
            <h1>Brand : {brand}</h1>
            <h3>Name: {phone_name}</h3>
            {/* Dynamic routing way 1 */}
            {/* <Link to= {`/products/${slug}`}>Details</Link> */}

            {/* Dynamic routing way two */}
            {/* <Link to= {`/products/${slug}`}>
                <button>Details</button>
            </Link> */}

            <button onClick={clickHandler}>Details</button>
        </div>
    );
};

export default Product;