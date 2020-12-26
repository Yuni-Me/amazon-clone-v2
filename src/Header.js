import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Select, FormControl, MenuItem, makeStyles, InputLabel } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Header() {
    return (
        <div className='Header'>
            {/*Logo*/}
            <Link to="/">
                <div className='Header-logo'>
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} />
                </div>
            </Link>
            {/*Address*/}
            <div className='Header-optionAddress'>
                {/*Icon*/}
                <div className='Header-option'>
                    <span className='Header-optionLineOne'>Hello,</span>
                    <span className='Header-optionLineTwo'>Select your address</span>
                </div>
            </div>
            {/*Search*/}
            <div className='Header-search'>
                <div className='Header-navSearch'>
                    <div className='Header-navSearchCard'>
                        <span className='Header-navSearchLabel'>All</span>
                        <ArrowDropDownIcon className='nav-icon'/>
                    </div>
                    <Select>   
                        <MenuItem value=''>All Departments</MenuItem>
                        <MenuItem value=''>Deals</MenuItem>
                        <MenuItem value=''>Audible Books & Originals</MenuItem>
                        <MenuItem value=''>Alexa Skills</MenuItem>
                        <MenuItem value=''>Amazon Devices</MenuItem>
                        <MenuItem value=''>Amazon Fresh</MenuItem>
                        <MenuItem value=''>Amazon Pharmacy</MenuItem>
                        <MenuItem value=''>Amazon Warehouse</MenuItem>
                        <MenuItem value=''>Appliances</MenuItem>
                        <MenuItem value=''>Apps & Games</MenuItem>
                        <MenuItem value=''>Arts, Crafts & Sewing</MenuItem>
                        <MenuItem value=''>Automotive Parts & Accessories</MenuItem>
                        <MenuItem value=''>Baby</MenuItem>
                        <MenuItem value=''>Beauty & Personal Care</MenuItem>
                        <MenuItem value=''>Books</MenuItem>
                        <MenuItem value=''>CDs & Vinyl</MenuItem>
                        <MenuItem value=''>Cell Phones & Accessories</MenuItem>
                    </Select> 
                </div>
                <input className='Header-searchInput' type='text' />
                <div className='Header-searchIconContainer'>
                    <SearchIcon />
                </div>
                
            </div>
            
            <div className='Header-navItems'>
                {/*Login Name*/}
                <div className='Header-option'>
                    <span className='Header-optionLineOne'>Hello, Yuni</span>
                    <span className='Header-optionLineTwo'>Account & Lists</span>
                </div>
                {/*Orders*/}
                <div className='Header-option'>
                    <span className='Header-optionLineOne'>Returns</span>
                    <span className='Header-optionLineTwo'>& Orders</span>
                </div>
                {/*Carts*/}
                <Link to="/cart">
                    <div className='Header-optionCart'>
                        <AddShoppingCartIcon style={{ fontSize: 35 }}/>
                        <span className='Header-cartCount'>20</span>
                        <span className='Header-cartSign'>Cart</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
