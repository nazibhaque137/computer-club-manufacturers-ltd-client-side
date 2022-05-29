import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
    <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold uppercase m-5'>Our Items</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    (items.length >= 6) ?
                    items.slice(items.length-6).map(item =><Item
                        key={item._id}
                        item={item}
                    ></Item>)
                    :
                        items.slice(items.length -3).map(item => <Item
                                key={item._id}
                                item={item}
                            ></Item>)
                }
            </div>
        </div>
                
    );
};

export default Items;