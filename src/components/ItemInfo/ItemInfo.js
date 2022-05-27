import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemInfo from '../../hooks/useItemInfo';

const ItemInfo = () => {
    const { itemId } = useParams();
    const [item] = useItemInfo(itemId);

    return (
        <div>
            <h2>You are about to place order for: {item.name}</h2>
            <div className='text-center'>
                <Link to={`/purchase/${itemId}`}>
                    <button className='btn btn-primary'>Place Order</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemInfo;