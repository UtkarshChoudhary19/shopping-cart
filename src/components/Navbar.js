import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'; // Import Link with curly braces

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left_side">
            <p>Shopping cart</p>
        </div>
        <div className="right_side">
            <Link to='/home'>Home Page</Link>
            <Link to='/cart'>Cart Page</Link> 
        </div>
    </div>
  );
}

export default Navbar;
