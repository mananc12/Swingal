import React from 'react';

export const AddToCart = () => {
  // You can fetch the cart items and their details from your data or state here.

  // For example:
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15.99, quantity: 1 },
    // Add more items as needed.
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <span>{item.name}</span>
              <span>Price: ${item.price}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Subtotal: ${item.price * item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
