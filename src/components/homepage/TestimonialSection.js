"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, ABC Inc.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lobortis justo. Proin mollis scelerisque ex.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Manager, XYZ Corp.",
    message:
      "Fusce volutpat tortor sit amet massa sagittis, ac iaculis odio congue. Nam maximus vestibulum lorem.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-800 py-10">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">{testimonial.message}</p>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
