import React, {useState, useEffect, useContext} from 'react'
import { StateContext } from '../App'
import { db } from '../firebase'
import Item from './Item'
import './Orders.css'

function Orders() {
    const[{basket, user}, dispatch] = useContext(StateContext)
    const [orders, setOrders] = useState([])

    console.log(orders)

    useEffect(() => {
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }
        else{
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            {
                orders?.map((order) => (
                    <Item item={order} />
                ))
            }
        </div>
    )
}

export default Orders
