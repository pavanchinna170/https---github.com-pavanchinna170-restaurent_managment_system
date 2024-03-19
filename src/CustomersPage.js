import React from 'react';

const CustomersPage = () => {
  const customersData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: [1, 2] },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', orders: [3] },
  ];

  const handleAddNewCustomer = () => {
    // Handle adding new customer logic here
  };

  const handleEditCustomer = (customerId) => {
    // Handle editing customer logic here
  };

  return (
    <div>
      <h1>Customers</h1>
      <button onClick={handleAddNewCustomer}>Add New Customer</button>
      <ul>
        {customersData.map((customer) => (
          <li key={customer.id}>
            <p>
              {customer.name} ({customer.email})
            </p>
            <ul>
              {customer.orders.map((orderId) => (
                <li key={orderId}>Order {orderId}</li>
              ))}
            </ul>
            <button onClick={() => handleEditCustomer(customer.id)}>
              Edit Customer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersPage;