import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useSearchParams } from 'react-router';

const PaymentSuccess = () => {

  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
   const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  console.log(sessionId);
  
  useEffect(() => { 
    if (sessionId) {
        axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
            console.log(res.data);
            setPaymentInfo({
              transactionId: res.data.transactionId,
              trackingId: res.data.trackingId,
            });
        })
    }
  }, [sessionId, axiosSecure])
  return (
    <div>
        <h2 className='text-3xl font-bold text-center mt-10'>Payment Successful!</h2>
        <p className='text-lg text-center mt-5'>Your TransactionId: {paymentInfo?.transactionId}</p>
        <p className='text-lg text-center mt-5'>Your TrackingId: {paymentInfo?.trackingId}</p>
    </div>
  )
}

export default PaymentSuccess