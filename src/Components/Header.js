import React, {useContext} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { StateContext } from '../App';
import { auth } from '../firebase';

function Header() {
    const[{basket, user}, dispatch] = useContext(StateContext)

    const handleUser = () => {
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" src="header/amazon-logo.png" alt="amazon logo" />
            </Link>

            <div className="header__search">
                <input type="text" name="" id="" />
                <SearchIcon className="header__search-icon" style={{fontSize: 27}} />
            </div>

            <Link to={!user && '/login'}>
                <div className="header__option" onClick={handleUser}>
                    <small>Hello {user ? user.email : "Guest"}</small>
                    <span>
                        {user ? "Sign out" : "Sign In"}
                    </span>
                </div>
            </Link>

            <Link to='/orders'>
                <div className="header__option">
                        <small>Returns</small>
                        <span>& Orders</span>
                </div>
            </Link>

            <div className="header__option">
                    <small>Your</small>
                    <span>
                        Prime</span>
            </div>

            <Link to='/basket'>
                <div className="header__basket">
                    <ShoppingBasketIcon style={{fontSize: 30}} />
                    <span style={{fontWeight: 700}}> {basket.length} </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
