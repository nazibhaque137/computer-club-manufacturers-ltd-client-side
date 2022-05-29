import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://lit-basin-85287.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            /*
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            */
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Cannot Make an admin');
                }
                
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;