import React from 'react'
import CurrencyFormat from 'react-currency-format'
import BasketProduct from './BasketProduct'
import './Item.css'

function Item({item}) {
    return (
        <div className="item">
            <h1>Order</h1>
            <p className="item__date">{item.data.createdAt.toDate().toString()}</p>
            <p className="item__id">Order ID: {item.id}</p>
            {
                item.data.basket.map(item => (
                    <BasketProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        hideButton = {true}
                    />
                ))
            }
            <p className="item__total">Total: <CurrencyFormat value={item.data.amount} displayType={'text'} thousandSeparator={true} prefix={'₹ '} /></p>
        </div>
    )
}

export default Item
