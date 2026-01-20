


import React from 'react';

/**
 * HeroSection Component
 * Featuring a background video and large animated text reveal for the 
 * main title, sub-heading, and a new descriptive tagline.
 */

const HeroSection = () => {
  // Your local video path
  const videoSource = "/video/Logistic.mp4";

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
        <h1 className="text-[#c6a95d] text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-center leading-none">
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
        <h2 className="text-[#17244b] text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.5em] text-center mt-4">
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