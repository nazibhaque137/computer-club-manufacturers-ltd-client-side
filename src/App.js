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

import ManageOrders from './components/Dashboard/ManageOrders';
import AddItem from './components/Dashboard/AddItem';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageItems from './components/Dashboard/ManageItems';


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
        <Route path="home" element={<Home></Home>}></Route>

        <Route path="purchase/:itemId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>

          <Route path="manage-orders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path="add-item" element={<RequireAdmin><AddItem></AddItem></RequireAdmin>}></Route>
          <Route path="make-admin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path="manage-items" element={<RequireAdmin><ManageItems></ManageItems></ RequireAdmin>}></Route>
        </Route>

        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="my-portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      <ToastContainer />
            </div>
  );
}

export default App;
