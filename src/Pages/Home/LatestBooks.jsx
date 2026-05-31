import React from 'react'
import LatestBookCard from '../../Components/LatestBookCard'

const LatestBooks = ({ latestBookData }) => {
  return (
    <div className='container max-w-7xl mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold text-center mb-10'>Latest Books</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {latestBookData.map((book) => (
          <LatestBookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default LatestBooks