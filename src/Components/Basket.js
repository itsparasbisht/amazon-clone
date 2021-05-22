import React, {useContext, useState} from 'react'
import { StateContext } from '../App'
import './Basket.css'
import BasketProduct from './BasketProduct'
import TotalAmount from './TotalAmount'
import { useHistory } from 'react-router'

function Basket() {
    const [{basket, user}, dispatch] = useContext(StateContext)
    const history = useHistory()

    return (
        <div className="basket">
            <div className="basket__left">
                <h3>Hello <small>{user ? user.email : "Guest" }</small></h3>

                <h1>Your Basket Items :</h1>

                {
                    basket?.map(item => (
                        <BasketProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            hideButton={false}
                        />
                    ))
                }
            </div>

            <div className="basket__right">
                <h3>Subtotal ({basket.length} items): <span>
                <TotalAmount />
                </span></h3>
                <button onClick={e => {
                    if(user){
                        if(basket.length > 0){
                            history.push('/payment')
                        }
                        else{
                            alert("basket is empty")
                            history.push('/')
                        }
                    }
                    else{
                        history.push('/login')
                    }
                    }}>Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Basket
