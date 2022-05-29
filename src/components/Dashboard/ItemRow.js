import React from 'react';
import { toast } from 'react-toastify';

const ItemRow = ({ item, index, setDeletingItem }) => {
    const { name, image } = item;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>
                <label onClick={() => setDeletingItem(item)} for="delete-item-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ItemRow;