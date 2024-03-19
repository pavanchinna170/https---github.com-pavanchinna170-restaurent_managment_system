import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginSignupPage from './LoginSignupPage';
import DashboardPage from './DashboardPage';
import OrdersPage from './OrdersPage';
import TablesPage from './TablesPage';
import CustomersPage from './CustomersPage';
import InventoryPage from './InventoryPage';
import ReportsPage from './ReportsPage';
import SettingsPage from './SettingsPage';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login/Signup</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/tables">Tables</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Route exact path="/" component={LoginSignupPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/tables" component={TablesPage} />
        <Route path="/customers" component={CustomersPage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/reports" component={ReportsPage} />
        <Route path="/settings" component={SettingsPage} />
      </main>
    </Router>
  );
};

export default App;