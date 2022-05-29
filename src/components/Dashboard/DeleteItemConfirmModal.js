import React from 'react';
import { toast } from 'react-toastify';

const DeleteItemConfirmModal = ({ deletingItem, refetch, setDeletingItem }) => {
    const { _id, name } = deletingItem;

    const handleItemDelete = () => {
        /*
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'DELETE',

        })
            .then(res => {
                res.json();
                console.log(res);
            })

            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Item: ${name} is deleted.`)
                    setDeletingItem(null);
                    refetch();
                }
            })
            */
    }
    return (
        <div>
            <input type="checkbox" id="delete-item-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete this Item: {name}?</h3>
                    <div class="modal-action">
                        <button onClick={() => handleItemDelete()} class="btn btn-xs btn-error">Yes</button>
                        <label for="delete-item-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteItemConfirmModal;