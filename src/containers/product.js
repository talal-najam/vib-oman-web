import React from 'react'
import { Product } from '../components';

const ProductContainer = () => {
    return (
        <Product>
            <Product.ImagesContainer>
                <Product.MainImage />
            </Product.ImagesContainer>
        </Product>
    )
}

export default ProductContainer;
