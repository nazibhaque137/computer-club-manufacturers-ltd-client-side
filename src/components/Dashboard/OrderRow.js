import React from 'react';

const OrderRow = ({ order, index, setDeletingOrder }) => {
    const { itemName, quantity } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} for="delete-order-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default OrderRow;