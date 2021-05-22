import React, {useContext} from 'react'
import { StateContext } from '../App'
import './BasketProduct.css'

function BasketProduct({id, title, price, image, rating, hideButton}) {
    const[{basket}, dispatch] = useContext(StateContext)

    const handleRemove = () => {
        dispatch({type: 'REMOVE', id: id})
    }

    return (
        <div className="basketProduct">
            <div className="basketProduct__img">
                <img src={image} alt="" />
            </div>
            <div className="basketProduct__details">
                <h1>{title}</h1>
                <div>
                    Rs <span>{price}</span>
                </div>
                <div>
                    {Array(rating).fill('⭐')}
                </div>
                {
                    !hideButton && (<button onClick={handleRemove}>Remove from Basket</button>)
                }
            </div>
        </div>
    )
}

export default BasketProduct
