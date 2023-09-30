import React, {useState} from 'react';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, checkout } from '../redux/action/CartAction';


const Cart = () => {
    const [checkmsg, setcheckmsg] = useState("");
    const dispatch = useDispatch();
  const {cart} = useSelector((state) => state);
 

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    
    setTimeout( ()=> {

        setcheckmsg('Items have been checked out.');
        dispatch(checkout());
    },1000)
    
  };

  const total = cart.reduce( (accumulator, item) => 
     accumulator + item.price, 0
  )
  return (
    <div>
      <h1>My Cart</h1>
      <h1>{ checkmsg && checkmsg }</h1>
        <div className="container">
            <div className='row_line left-side'>
                {cart.map((item) => (
                <div className='item' key={item.id}>
                    <img className="img" src={item.thumbnail} alt="item_post" />
                           <p className="title">Title : {item.title}</p>
                           <p className="price">Price : ${item.price}</p>
                         
                    <button className='btn' onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
                </div>
                ))}
            </div>
            <div className="checkout-page right-side">
                <div className='checkout'>
                    <h2>Checkout</h2>
                    <div>
                                {cart.map((item) => (
                                    <div key={item.id}>
                                        <div className="items">
                                            <p>{item.title}</p>
                                            <p>$ {item.price}</p>
                                        </div>
                                          
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div className="items">
                                    <p>Total:</p>
                                    <p className='total'>$ {total}</p>
                            </div>
                            
                    <button className='btn' onClick={handleCheckout}>Click to Checkout</button>
                </div>
            </div>
        </div>
      
      
    </div>
  );
}

export default Cart