import React from 'react';

const DashboardPage = () => {
  const salesData = {
    today: 120,
    yesterday: 100,
    lastWeek: 700,
  };const ordersData = [
    { id: 1, status: 'pending', table: 3 },
    { id: 2, status: 'in progress', table: 5 },
    { id: 3, status: 'completed', table: 2 },
  ];

  const tablesData = [
    { id: 1, status: 'available', seats: 4 },
    { id: 2, status: 'occupied', seats: 2 },
    { id: 3, status: 'cleaning', seats: 6 },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Sales Overview</h2>
        <p>Today: ${salesData.today}</p>
        <p>Yesterday: ${salesData.yesterday}</p>
        <p>Last Week: ${salesData.lastWeek}</p>
      </div>
      <div>
        <h2>Orders</h2>
        <ul>
          {ordersData.map((order) => (
            <li key={order.id}>
              {order.status} - Table {order.table}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Tables</h2>
        <ul>
          {tablesData.map((table) => (
            <li key={table.id}>
              {table.status} - {table.seats} seats
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link to="/orders/new">Add New Order</Link>
        <Link to="/tables/new">Add New Table</Link>
        <Link to="/customers/new">Add New Customer</Link>
      </div>
    </div>
  );
};

export default DashboardPage;