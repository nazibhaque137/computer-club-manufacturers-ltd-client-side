import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteItemConfirmModal from './DeleteItemConfirmModal';
import ItemRow from './ItemRow';

const ManageItems = () => {
    const [deletingItem, setDeletingItem] = useState(null);
    
    const { data: items, isLoading, refetch } = useQuery('items', () => fetch('https://lit-basin-85287.herokuapp.com/item', {        
         headers: {
             authorization: `Bearer ${localStorage.getItem('accessToken')}`
         }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Items: {items.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => <ItemRow
                                key={item._key}
                                item={item}
                                index={index}
                                refetch={refetch}
                                setDeletingItem={setDeletingItem}
                            ></ItemRow>)
    }
                    </tbody>
                </table>
            </div>
            {deletingItem && <DeleteItemConfirmModal
                deletingItem={deletingItem}
                refetch={refetch}
                setDeletingItem={setDeletingItem}
></DeleteItemConfirmModal>}
        </div>
    );
};

export default ManageItems;