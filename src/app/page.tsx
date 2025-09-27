"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Star,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    followers: 0,
    products: 0,
    reviews: 0,
    years: 0,
  });

  // Sample data - you'll replace with actual content
  const slides = [
    {
      id: 1,
      title: "Premium Hassani Bread",
      description: "Freshly baked daily with the finest ingredients",
      image: "/coconut.png", // You'll add actual images
    },
    {
      id: 2,
      title: "Marble Bread Collection",
      description: "The signature bread that made us famous in Port Harcourt",
      image: "/marble.png",
    },
    {
      id: 3,
      title: "Chocolate Delights",
      description: "Rich, decadent chocolate breads for special moments",
      image: "/chocolate.png",
    },
    {
      id: 4,
      title: "Traditional Nigerian Favorites",
      description: "Coconut, fruit, and jumbo breads with local flavors",
      image: "/tradi.png",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Chioma Okafor",
      rating: 5,
      text: "Best bread in Port Harcourt! The marble bread is absolutely divine. Hassani Bakery never disappoints.",
      avatar: "/images/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Emmanuel Nwosu",
      rating: 5,
      text: "I've been buying from Hassani Bakery for months. The quality is consistent and the taste is unmatched!",
      avatar: "/images/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Grace Adebayo",
      rating: 5,
      text: "From an artist to a baker, Hassani has truly mastered his craft. Every bread tells a story of excellence.",
      avatar: "/images/avatar-3.jpg",
    },
    {
      id: 4,
      name: "David Okoro",
      rating: 5,
      text: "The chocolate bread is my family's favorite! Thank you Hassani for bringing joy to our breakfast table.",
      avatar: "/images/avatar-4.jpg",
    },
    {
      id: 5,
      name: "Sarah Ugochukwu",
      rating: 5,
      text: "Hassani Bakery's bread has become a staple in our home. Fresh, delicious, and always perfectly baked!",
      avatar: "/images/avatar-5.jpg",
    },
    {
      id: 6,
      name: "Michael Eze",
      rating: 5,
      text: "The best investment decision - choosing Hassani Bread for my family. Quality that speaks for itself!",
      avatar: "/images/avatar-6.jpg",
    },
  ];

  const products = [
    {
      name: "Sardine Bread",
      price: "₦3,600",
      image: "/sardine.png",
    },
    {
      name: "Sardine Bread Plus",
      price: "₦6,700",
      image: "/sardinep.png",
    },
    {
      name: "Chocolate Bread",
      price: "₦3,500",
      image: "/chocolate.png",
    },
    {
      name: "Hassani Marble Bread",
      price: "₦4,500",
      image: "/marble.png",
    },
    {
      name: "Coconut Bread",
      price: "₦3,200",
      image: "/coconut.png",
    },
    { name: "Fruit Bread", price: "₦3,300", image: "/fruit.png" },
  ];

  // Animation for stats counter
  useEffect(() => {
    const animateStats = () => {
      const targets = { followers: 6400, products: 15, reviews: 500, years: 2 };
      const duration = 2000;
      const stepTime = 50;
      const steps = duration / stepTime;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats({
          followers: Math.floor(targets.followers * progress),
          products: Math.floor(targets.products * progress),
          reviews: Math.floor(targets.reviews * progress),
          years: Math.floor(targets.years * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepTime);
    };

    animateStats();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}

        <div className="absolute inset-0">
          {/* Video Background */}
          <video
            src="/video/eric.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Fallback Gradient (shows if video fails) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"
            style={{ zIndex: -1 }}
          ></div>
        </div>

        {/* Floating Bread Icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-0">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl">🍞</span>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-500">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-3xl">🥖</span>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-xl">🧈</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-pulse">
              Hassani Bakery
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-300">
              From Artist to Baker - Crafting Port Harcourt's Finest Bread Since
              Day One
            </p>
            <p className="text-lg mb-12 opacity-80 animate-fade-in-up delay-500">
              Experience the premium taste that has captured the hearts of
              thousands across Rivers State
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex justify-center animate-fade-in-up delay-700">
              <button
                onClick={() => {
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="block md:inline-block bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl "
              >
                Order Now
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="block md:inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              The Hassani Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
              What started as an artistic journey transformed into a culinary
              masterpiece. Ric Hassani didn't just open a bakery - he created a
              movement that's redefining bread culture in Port Harcourt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  From Music to Mastery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Renowned artist Ric Hassani brought the same passion and
                  attention to detail from his music career into the world of
                  baking. Each loaf is crafted with the precision of a musical
                  composition and the soul of an artist.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Community Favorite
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  What started as a personal venture quickly became Port
                  Harcourt's most talked-about bakery. Our commitment to quality
                  and authentic flavors has earned us thousands of loyal
                  customers who can't start their day without Hassani bread.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {animatedStats.followers.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {animatedStats.products}+
                </div>
                <div className="text-gray-600 font-medium">Bread Varieties</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {animatedStats.reviews}+
                </div>
                <div className="text-gray-600 font-medium">5-Star Reviews</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {animatedStats.years}+
                </div>
                <div className="text-gray-600 font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Slider Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Signature Breads
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each bread is a masterpiece, baked fresh daily with premium
              ingredients and a touch of artistic flair
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className="min-w-full h-96 bg-gradient-to-br from-blue-700 to-purple-500 flex items-center justify-center relative"
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative z-10 text-center text-white px-8">
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90">{slide.description}</p>
                    </div>
                    {/* Placeholder for actual bread images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 flex items-center justify-center">
                      <Image
                        width={100}
                        height={100}
                        src={slide.image}
                        className="text-9xl opacity-30 w-full h-screen bg-cover"
                        alt="slide"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt=""
                    width={100}
                    height={100}
                    className=" bg-cover w-[90%] h-[90%] rounded-md"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the thousands who have
              made Hassani Bakery their daily choice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <Quote className="text-yellow-400 mr-2" size={20} />
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-lg mb-6 leading-relaxed opacity-90">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm opacity-70">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Visit Us Today
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600">
                    11, Temple Amadi Avenue, off Cherubim road, G.R.A. Phase 3,
                    Port Harcourt
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Call or WhatsApp
                  </h3>
                  <p className="text-gray-600">0906 801 8564</p>
                  <p className="text-gray-600">+234 706 385 1246</p>
                </div>
              </div>

              <div className="flex space-x-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Banking Information
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Account Name:</strong> Hassani Food & Drink
                  </p>
                  <p>
                    <strong>Zenith Bank:</strong> 1310207772
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 bg-cover bg-center relative overflow-hidden flex justify-center items-center"
              style={{ backgroundImage: `url('/address.png')` }}
            >
              <div className="text-center">
                <MapPin size={64} className="mx-auto mb-6 text-blue-600" />
                <a
                  href="https://maps.google.com/?q=11+Temple+Amadi+Avenue+Port+Harcourt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hassani Bakery
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              From the heart of an artist to your dining table. Experience the
              passion, taste the excellence.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Hassani Bakery. All rights reserved. | Designed with ❤️
                for scalable success
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
};

export default Page;
