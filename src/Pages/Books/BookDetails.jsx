import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const BookDetails = () => {
  const bookData = useLoaderData();
  console.log(bookData);

   return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-15">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 p-8">

          {/* Book Image */}
          <div className="flex justify-center">
            <img
              src={bookData.image}
              alt={bookData.title}
              className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Book Information */}
          <div className="space-y-5">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {bookData.title}
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                by {bookData.author}
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-2">
              {bookData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge badge-outline badge-primary"
                >
                  {tag}
                </span>
              ))}
            </div> */}

            <p className="text-gray-600 leading-relaxed">
              {bookData.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold">{bookData.category}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Language</p>
                <p className="font-semibold">{bookData.language}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Publisher</p>
                <p className="font-semibold">{bookData  .publisher}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Published</p>
                <p className="font-semibold">{bookData.publishedYear}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Pages</p>
                <p className="font-semibold">{bookData.pages}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Format</p>
                <p className="font-semibold">{bookData.format}</p>
              </div>
            </div>

            {/* Rating & Stock */}
            <div className="flex items-center justify-between border-t pt-5">
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="text-xl font-bold text-amber-500">
                  ⭐ {bookData.rating}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Stock</p>
                <p className="text-xl font-bold text-green-600">
                  {bookData.stock} Available
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="border-t pt-5">
              <h2 className="text-3xl font-bold text-violet-600">
                ৳ {bookData.price}
              </h2>
            </div>

            {/* Button */}
            <button className="btn bg-violet-600 hover:bg-violet-700 text-white w-full">
              Order This Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;