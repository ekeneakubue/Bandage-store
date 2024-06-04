import React from 'react';
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  useEffect(() => {
    cartItems.forEach((item) => {
      if (!item.title) {
        dispatch(fetchProductById(item.id));
      }
    });
  }, [cartItems, dispatch]);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.title}  />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}                    
                  />
                  <button onClick={() => handleRemove(item.id)} >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
