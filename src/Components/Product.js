import React, {useContext} from 'react'
import { StateContext } from '../App'
import './Product.css'

function Product({id, title, price, image, rating}) {
    const[{basket}, dispatch] = useContext(StateContext)

    const addToBasket = (e) => {
        e.preventDefault()
        dispatch({type:'ADD', data: {id: id, title: title, price: price, image: image, rating: rating}})
    }

    return (
        <div className="product">
            <div className="product__info">
                <h1>{title}</h1>
                <div className="product__details">
                    <h2><small>Rs</small> <bold>{price}</bold></h2>
                    <div className="product__rating">
                        {
                            Array(rating).fill('⭐')
                        }
                    </div>
                </div>
            </div>
            
            <img src={image} alt="product image" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
