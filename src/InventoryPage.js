import React from 'react';

const InventoryPage = () => {
  const inventoryData = [
    { id: 1, name: 'Burger', quantity: 10, reorderThreshold: 5 },
    { id: 2, name: 'Fries', quantity: 20, reorderThreshold: 10 },
    { id: 3, name: 'Salad', quantity: 5, reorderThreshold: 3 },
  ];

  const handleAddNewItem = () => {
    // Handle adding new item logic here
  };

  const handleEditItem = (itemId) => {
    // Handle editing item logic here
  };

  return (
    <div>
      <h1>Inventory</h1>
      <button onClick={handleAddNewItem}>Add New Item</button>
      <ul>
        {inventoryData.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleEditItem(item.id)}>
              Edit Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPage;