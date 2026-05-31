import React from 'react'
import { useLoaderData } from 'react-router';
import BookCard from '../../Components/BookCard';

const AllBooks = () => {
  const allBooksData = useLoaderData();
  return (
    <div className='container max-w-7xl mx-auto px-4 py-10 mt-15'>
      <h2 className='text-3xl font-bold text-center mb-10'>All Books</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {allBooksData.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default AllBooks