import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/Shared/RequireAuth';
import RequireAdmin from './components/Shared/RequireAdmin';

import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import Users from './components/Dashboard/Users';

import Blogs from './components/Blogs/Blogs';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/purchase/:itemId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          
          <Route path="manage-orders" element={<MyProfile></MyProfile>}></Route>
          <Route path="add-product" element={<MyProfile></MyProfile>}></Route>
          <Route path="make-admin" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="manage-products" element={<MyProfile></MyProfile>}></Route>
        </Route>
        
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="my-portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      <ToastContainer />
            </div>
  );
}

export default App;
