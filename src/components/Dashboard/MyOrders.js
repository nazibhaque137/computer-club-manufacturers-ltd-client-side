import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

       if(user){
           //const email = user?.email;
           fetch(`https://lit-basin-85287.herokuapp.com/order?user=${user.email}`)
           .then(res=>res.json())
               .then(data => setOrders(data))
           
       }

    }, [user])
    return ( 
        <div className='w-50 mx-auto'>
            <h2>Your orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Item Name</th>
                            <th>Ordered Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           orders.map((order, index) => <tr key = {order._id}>
                               <th>{index+1}</th>
                               <td>{order.userName}</td>
                               <td>{order.itemName}</td>
                               <td>{order.quantity}</td>
                               </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;