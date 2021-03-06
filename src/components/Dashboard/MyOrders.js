import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteOrderConfirmModal from './DeleteOrderConfirmModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const [user] = useAuthState(auth);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://lit-basin-85287.herokuapp.com/order?user=${user.email}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return ( 
        <div className='w-50 mx-auto'>
            <h2>Your orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>Ordered Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            ></OrderRow>)
     }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteOrderConfirmModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
                    ></DeleteOrderConfirmModal>}
        </div>
    );
};

export default MyOrders;