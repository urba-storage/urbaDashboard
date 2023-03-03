import React from 'react';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard';
import Order from './pages/Orders';
import Customer from './pages/Customers';
import Login from './components/login/login';
import MainLayout from './layout/MainLayout';
import CustomerProfilePage from './pages/Profile';

function App() {
  // const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Order />} />
          <Route path="products" element={<Blank />} />
          <Route
            path="customers"
            element={
              <Routes>
                <Route path="/" element={<Customer />} />
                <Route path=":userId" element={<CustomerProfilePage />} />
              </Routes>
            }
          />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
