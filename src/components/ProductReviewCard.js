import React from 'react'
import "../styles/productreviewcard.css"
function ProductReviewCard({ name, image, price, review }) {
    return (
        <div className='productreviewcard'>
            <img src={image} alt="review" />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewCard
