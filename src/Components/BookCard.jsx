import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const BookCard = ({ book }) => {
  const { _id, title, author, image, rating, price, category } = book;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <span className="text-xs bg-violet-100 text-violet-600 px-2 py-1 rounded-full">
          {category}
        </span>

        <h2 className="text-lg font-bold mt-3 line-clamp-1">
          {book.title}
        </h2>

        <p className="text-gray-500 text-sm">
          {book.author}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium">
              {book.rating}
            </span>
          </div>

          <span className="text-lg font-bold text-violet-600">
            ৳{book.price}
          </span>
        </div>

        <NavLink
          to={`/books/${_id}`}
          className="btn btn-sm bg-violet-600 hover:bg-violet-700 text-white w-full mt-4"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default BookCard;