import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { Link } from 'react-router'



const MyBooks = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['my-books', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders?email=${user?.email}`)
            return res.data
        }
    })

    const handleOrderDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) 
                axiosSecure.delete(`/orders/${id}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount) {
                        // refresh the list of orders after deletion
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        });
    }

    const handlePayment = async(order) => {
        const paymentInfo = {
            cost: order.totalPrice,
            orderId: order._id,
            senderEmail: order.senderEmail,
            bookName: order.bookName,
        };
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        window.location.href = res.data.url;
        console.log(res.data.url);
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>My Ordered Books: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table my-8">
                    {/* head */}
                    <thead className='border-b-2 border-gray-300'>
                        <tr className="bg-base-200">
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Payment Status</th>
                            <th>Books Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{order.senderName}</td>
                                <td>{order.bookName}</td>
                                <td>
                                    {
                                        order.paymentStatus === 'paid' ?
                                            <span className='text-green-500 font-semibold'>Paid</span>
                                            :
                                            <button onClick={() => handlePayment(order)} className='btn btn-primary font-semibold'>Pay</button>
                                    }
                                </td>
                                <td>{order.quantity}</td>
                                <td>
                                    <button className="btn btn-square hover:bg-base-300 bg-white">
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button className="btn btn-square hover:bg-base-300 md:mx-2 lg:mx-2 bg-white">
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleOrderDelete(order._id)}
                                        className="btn btn-square hover:bg-base-300 bg-white">
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBooks