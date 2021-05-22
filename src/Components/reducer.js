export const initialState = {
    basket: []
}

export const basketTotal = (basket) => {
    const priceArr = []
    basket.forEach(item => {
        const value = item.price
        const price = value.split(',').join('')
        priceArr.push(parseInt(price))
    })
    return priceArr.reduce((price, value) => price + value, 0)
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                basket: [...state.basket, action.data]
            }
        case 'REMOVE':
            const newBasket = [...state.basket]
            const index = newBasket.findIndex(item => item.id === action.id)

            if(index >= 0){
                newBasket.splice(index, 1)
            }
            else{
                console.log('item does not exist')
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        default:
            return {
                state
            }
    }
}