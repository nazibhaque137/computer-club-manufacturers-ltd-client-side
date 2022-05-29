import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderConfirmModal = ({ deletingOrder, refetch, setDeletingOrder }) => {

    const { _id, itemName} = deletingOrder;

    const handleOrderDelete = () => {
        fetch(`https://lit-basin-85287.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                //authorization: `Bearer ${localStorage.getOrder('accessToken')}`
            }
        })
            .then(res => {
                res.json();
                console.log(res);
            })            
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order for: ${itemName} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-order-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete the order for: {itemName}?</h3>
                    <div class="modal-action">
                        <button onClick={() => handleOrderDelete()} class="btn btn-xs btn-error">Yes</button>
                        <label for="delete-order-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderConfirmModal;