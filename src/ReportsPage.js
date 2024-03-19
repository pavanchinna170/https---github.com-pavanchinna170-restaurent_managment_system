import React from 'react';

const ReportsPage = () => {
  const salesData = {
    today: 120,
    yesterday: 100,
    lastWeek: 700,
  };

  const inventoryData = [
    { id: 1, name: 'Burger', quantity: 10, reorderThreshold: 5 },
    { id: 2, name: 'Fries', quantity: 20, reorderThreshold: 10 },
    { id: 3, name: 'Salad', quantity: 5, reorderThreshold: 3 },
  ];

  return (
    <div>
      <h1>Reports</h1>
      <div>
        <h2>Sales Reports</h2>
        <p>Today: ${salesData.today}</p>
        <p>Yesterday: ${salesData.yesterday}</p>
        <p>Last Week: ${salesData.lastWeek}</p>
      </div>
      <div>
        <h2>Inventory Reports</h2>
        <ul>
          {inventoryData.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              {item.quantity < item.reorderThreshold && (
                <p style={{ color: 'red' }}>
                  Low Stock Alert: Reorder {item.name}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportsPage;