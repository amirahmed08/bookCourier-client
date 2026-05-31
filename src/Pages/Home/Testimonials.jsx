import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Book Lover",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Amazing service! Got my favourite book in just 2 days.",
      rating: 5
    },
    {
      name: "Tanvir Hasan",
      role: "Regular Reader",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "BookCourier made borrowing books so easy and convenient.",
      rating: 5
    },
    {
      name: "Mahfuza Rahman",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Great collection and excellent customer support.",
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Readers Say
          </h2>
          <p className="text-gray-600">Real stories from our happy readers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;