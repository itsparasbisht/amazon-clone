import CurrencyFormat from 'react-currency-format';
import { basketTotal } from './reducer';
import React, {useContext} from 'react'
import { StateContext } from '../App';

function TotalAmount() {
    const[{basket}, dispatch] = useContext(StateContext)
    const amount = basketTotal(basket)

    return (
        <CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'₹ '} />
    )
}

export default TotalAmount
