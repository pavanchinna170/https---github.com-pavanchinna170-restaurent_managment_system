import React from 'react';

const OrdersPage = () => {
  const ordersData = [
    { id: 1, status: 'pending', table: 3, items: ['Burger', 'Fries'] },
    { id: 2, status: 'in progress', table: 5, items: ['Salad', 'Water'] },
    { id: 3, status: 'completed', table: 2, items: ['Pizza', 'Beer'] },
  ];

  const handleMarkAsComplete = (orderId) => {
    // Handle marking order as complete logic here
  };

  const handleDelete = (orderId) => {
    // Handle deleting order logic here
  };

  return (
    <div>
      <h1>Orders</h1>
      <div>
        <input type="text" placeholder="Search orders..." />
        <select>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <ul>
        {ordersData.map((order) => (
          <li key={order.id}>
            <p>
              {order.status} - Table {order.table}
            </p>
            <p>Items: {order.items.join(', ')}</p>
            <button onClick={() => handleMarkAsComplete(order.id)}>
              Mark as Complete
            </button>
            <button onClick={() => handleDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;