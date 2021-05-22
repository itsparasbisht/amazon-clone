import React, {useContext} from 'react'
import { StateContext } from '../App'
import './Payment.css'
import BasketProduct from './BasketProduct'
import TotalAmount from './TotalAmount'
import { useHistory } from 'react-router'
import { createdAt, db } from '../firebase'
import { basketTotal } from './reducer'

function Payment() {
    const[{basket, user}, dispatch] = useContext(StateContext)
    const history = useHistory()
    const total = basketTotal(basket)
    console.log(total)

    const handleClick = (e) => {
        e.preventDefault()
        
        db.collection('users').doc(user.uid).collection('orders').add({
            basket: basket,
            amount: total,
            createdAt: createdAt
        })
        .then(() => {
            dispatch({type: 'EMPTY_BASKET'})
            history.replace('/orders')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="payment">
            <h1>Checkout ({basket.length} items)</h1>
            <div className="payment__details">
                <div className="payment__address">
                    <h2>Delivery Address</h2>
                    <h3>
                        <span>{user?.email}</span> <br />
                        North valley, east junction <br />
                        New York
                    </h3>
                </div>
                <div className="payment__items">
                    <h2>Review items & delivery</h2>
                    <div>
                        {
                            basket?.map(item => (
                                <BasketProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="payment__method">
                    <h2>Payment method</h2>
                    <div>
                        <h3>Order Total: <TotalAmount /></h3>
                        <button onClick={(e) => {
                            if(user){
                                handleClick(e)
                            }
                            else{
                                history.push('/login')
                            }
                        }}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
