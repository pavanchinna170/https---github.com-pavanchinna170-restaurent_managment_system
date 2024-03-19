import React from 'react';

const TablesPage = () => {
  const tablesData = [
    { id: 1, status: 'available', seats: 4, server: 'John' },
    { id: 2, status: 'occupied', seats: 2, server: 'Jane' },
    { id: 3, status: 'cleaning', seats: 6, server: '' },];

  const handleChangeStatus = (tableId, newStatus) => {
    // Handle changing table status logic here
  };

  const handleAddNote = (tableId, note) => {
    // Handle adding note to table logic here
  };

  return (
    <div>
      <h1>Tables</h1>
      <ul>
        {tablesData.map((table) => (
          <li key={table.id}>
            <p>
              {table.status} - {table.seats} seats
            </p>
            <p>Server: {table.server}</p>
            <button onClick={() => handleChangeStatus(table.id, 'occupied')}>
              Change Status to Occupied
            </button>
            <button onClick={() => handleChangeStatus(table.id, 'cleaning')}>
              Change Status to Cleaning
            </button>
            <input
              type="text"
              placeholder="Add note..."
              onChange={(e) => handleAddNote(table.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TablesPage;