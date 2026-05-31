import React from 'react';
import { 
  FaBookOpen, 
  FaTruck, 
  FaHandHoldingHeart, 
  FaShieldAlt 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBookOpen className="w-10 h-10 text-purple-600" />,
      title: "Wide Collection",
      desc: "Wide Collection of books across different genres"
    },
    {
      icon: <FaTruck className="w-10 h-10 text-purple-600" />,
      title: "Fast Delivery",
      desc: "Same day and next day delivery"
    },
    {
      icon: <FaHandHoldingHeart className="w-10 h-10 text-purple-600" />,
      title: "Easy & Convenient",
      desc: "Borrow books, return without hassle"
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-purple-600" />,
      title: "Secure & Safe",
      desc: "Your data and payment are our priority"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose BookCourier?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make book borrowing and delivery simple, fast, and enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;