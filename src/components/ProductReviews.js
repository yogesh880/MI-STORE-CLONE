import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../styles/productreviews.css"
function ProductReviews({ productreview }) {
    return (
        <div className='productreviews'>
            {productreview.map((item, index) => (
                <ProductReviewCard key={item.image} image={item.image} price={item.price} review={item.review} name={item.name} index={index} />
            ))
            }
        </div>
    )
}

export default ProductReviews
