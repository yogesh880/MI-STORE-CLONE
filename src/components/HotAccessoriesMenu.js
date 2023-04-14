import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/HotAccessoriesmenu.css"

function HotAccessoriesMenu() {
    return (
        <div className="hotaccessories">
            <Link className='HotAccessoriesLink' to="/music">Music Store</Link>
            <Link className='HotAccessoriesLink' to="/smartdevice">Smart Device</Link>
            <Link className='HotAccessoriesLink' to="/home">Home</Link>
            <Link className='HotAccessoriesLink' to="/lifestyles">LifeStyles</Link>
            <Link className='HotAccessoriesLink' to="/mobileaccessories">Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu;
