import React from 'react'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['payment-history', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history?email=${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h2 className='text-3xl font-bold mb-5'>Payment History: {paymentHistory.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Books Name</th>
                            <th>Price</th>
                            <th>TransactionId</th>
                            <th>Payment time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentHistory.map((payment, index) => (
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.orderedBook}</td>
                                    <td>{payment.amount}</td> 
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.createdAt}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory