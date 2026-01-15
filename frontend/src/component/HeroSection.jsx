// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, Twitter, Facebook, Menu, X } from 'lucide-react';

// import AirFreightImg from "../assets/Air-fright.webp";
// import RoadFright from "../assets/Road fright.webp";
// import WarehouseSolutions from "../assets/Warehouse Solutions.webp";


// const slides = [
//   {
//     image: RoadFright, // Truck Transportation
//     title: 'TRUCK TRANSPORTATION',
//     description: 'We provide safe, reliable, and cost-effective truck transportation services across cities and states. Our fleet is equipped for full truckload (FTL) and less than truckload (LTL) shipments, ensuring timely delivery and complete cargo safety.',
//   },
//   {
//     image: WarehouseSolutions, // Warehousing Solutions
//     title: 'WAREHOUSING SOLUTIONS',
//     description: 'We offer secure and scalable warehousing services for all your storage needs. Our state-of-the-art facilities ensure your goods are handled with care and are ready for distribution at a moment\'s notice.',
//   },
//   {
//     image: AirFreightImg, // Express Delivery
//     title: 'EXPRESS DELIVERY',
//     description: 'Our express delivery service ensures your packages reach their destination with speed and precision. We offer real-time tracking and a dedicated team to guarantee your shipments arrive on time, every time.',
//   },
// ];

// const HeroSection = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handleCarouselClick = (e) => {
//     const clickX = e.clientX;
//     const carouselWidth = e.currentTarget.offsetWidth;
//     const carouselLeft = e.currentTarget.getBoundingClientRect().left;

//     if (clickX < carouselLeft + carouselWidth / 2) {
//       goToPrevSlide();
//     } else {
//       goToNextSlide();
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNextSlide();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
//               ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'}`}
//           onClick={handleCarouselClick}
//           style={{
//             backgroundImage: `url(${slide.image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
//           <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center p-8">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
//               {slide.title}
//             </h1>
//             <p className="max-w-3xl text-lg md:text-xl font-light font-sans">
//               {slide.description}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* Carousel Dots */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex space-x-4">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`h-4 w-4 rounded-full transition-colors duration-300
//                 ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from 'react';

/**
 * HeroSection Component
 * Featuring a background video and large animated text reveal for the 
 * main title, sub-heading, and a new descriptive tagline.
 */

const HeroSection = () => {
  // Your local video path
  const videoSource = "/video/Bridge_Truck (1) (1).mp4";

  // Text strings to be displayed with animation
  const headingText = "GLOBALFLOW";
  const subHeadingText = "LOGISTICS";
  const taglineText = "Your Trusted Partner in Global Supply Chain Solutions";

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* CSS for character-by-character animation */}
      <style>
        {`
          @keyframes reveal {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-char {
            display: inline-block;
            opacity: 0;
            animation: reveal 0.5s forwards;
          }
        `}
      </style>

      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Animated Text Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
        {/* Main Heading */}
        <h1 className="text-white text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-center leading-none">
          {headingText.split('').map((char, index) => (
            <span
              key={index}
              className="animate-char"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Sub-heading (Logistics) */}
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.5em] text-center mt-4">
          {subHeadingText.split('').map((char, index) => (
            <span
              key={index}
              className="animate-char"
              style={{
                // Delay starts after the main heading starts to finish
                animationDelay: `${(headingText.length * 0.1) + (index * 0.1)}s`
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        {/* New Tagline */}
        <p className="text-gray-200 text-sm md:text-lg lg:text-xl font-medium tracking-wide text-center mt-6 max-w-2xl">
          {taglineText.split('').map((char, index) => (
            <span
              key={index}
              className="animate-char"
              style={{
                // Delay starts after both Heading and Sub-heading finish
                animationDelay: `${((headingText.length + subHeadingText.length) * 0.1) + (index * 0.03)}s`
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;