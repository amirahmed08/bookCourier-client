import React from 'react'
import { Link } from 'react-router'

const PaymentCancelled = () => {
  return (
    <div className=' text-center'>
        <h2 className='text-3xl font-bold text-center mt-10'>Payment Cancelled!</h2>
        <p className='text-lg text-center mt-5'>Your payment has been cancelled. If you have any questions, please contact our support team.</p>
        <Link to="/my-dashboard/my-books" className="btn btn-primary mt-5">Go Back to My Books</Link>
    </div>
  )
}

export default PaymentCancelled