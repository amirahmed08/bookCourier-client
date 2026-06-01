import React from 'react'
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {

    const { paymentId } = useParams();
    const axiosSecure = useAxiosSecure();

    const {isLoading, data: orders} = useQuery({
        queryKey: ['orders', paymentId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders/${paymentId}`);
            return res.data;
        }
    })

    const handlePayment = async() => {
        const paymentInfo = {
            cost: orders.totalPrice,
            orderId: orders._id,
            senderEmail: orders.senderEmail,
            bookName: orders.bookName,
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data);

        window.location.href = res.data.url;
    }

    if(isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-infinity loading-xl"></span>
            </div>
        );
    }


  return (
    <div className=' text-center'>
        <h2 className='text-3xl font-bold text-center mt-10'>Payment for the Book name: "{orders.bookName}" and total amount: ${orders.totalPrice}</h2>
        <p className='text-lg text-center mt-5'>Please complete the payment for the selected book.</p>
        <button onClick={handlePayment} className="btn btn-primary mt-5">Pay Now</button>
    </div>
  )
}

export default Payment