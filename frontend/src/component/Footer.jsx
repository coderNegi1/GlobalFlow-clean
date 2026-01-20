import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook } from 'lucide-react';
import { Link } from "react-router-dom";
import Logo from '../assets/LOGO_GLOBAL_FLOW_main.png';
import DeveloperSection from './DevloperSection';


const Footer = () => {
  return (
    <div className="font-sans bg-white  flex flex-col justify-between  ">
      {/* Footer Section */}
      <footer className="bg-gray-100 text-gray-800 pt-12">
        <div className="container  mx-auto max-w-7xl px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Link to="/">
                <img
                  src={Logo}
                  alt="GlobalFlow Logo"
                  className="h-[90px] mr-2 cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-sm font-sans">
              The fastest and most efficient logistics solutions worldwide for all your cargo needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-4 font-display">Contact Us</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start">
                <MapPin size={16} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>
                  L-204 2nd Floor Street No.7C
                  Mahipalpur Ext. New Delhi (110037)- India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-blue-500 mr-2" />
                <span>+91 99101 65600</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-blue-500 mr-2" />
                <span>+91  9911856075</span>

              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-blue-500 mr-2" />
                <span>management@globalflow.in</span>
              </li>
            </ul>
          </div>


        </div>

        {/* Copyright */}
        <div className="mt-8 py-4 text-center text-sm bg-gray-300 text-gray-800 ">
          <p className="font-sans">   &copy; 2026 GlobalFlow. All Rights Reserved.</p>
          <p className='pt-1 font-sans flex items-center justify-center gap-2'>
            Designed by
            <DeveloperSection />
          </p>

        </div>

      </footer>
    </div>
  );
};

export default Footer;
