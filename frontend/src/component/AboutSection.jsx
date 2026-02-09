    import React from 'react';

    // Using consistent image variables. 
    // Replace these strings with your actual local paths like '../assets/Cargo Insurance.webp' 
    // once the files are correctly placed in your project's assets folder.
    import CompanyImg from '../assets/Cargo Insurance.webp';
    
    import CertificateImg from '../assets/GLOBALFLOW-LOGISTICS-INDIA-PRIVATE-LIMITED-JC-Premium-web.png';

    const About = () => {
      return (
        <div className="font-sans bg-gray-50 min-h-screen">
          {/* About Us Section */}
          <section className="container mx-auto max-w-6xl px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">About Our Company</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                GlobalFlow Logistics India Pvt. Ltd. is a leader in providing comprehensive logistics solutions across the globe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-sm mb-16 border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">Our Mission & Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded on the principles of reliability and efficiency, we are committed to delivering excellence in every shipment. Our dedicated team and extensive network ensure that your cargo is handled with the utmost care, from origin to destination.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in a wide range of services, including full truckload (FTL) and less than truckload (LTL) transportation, warehousing, and express delivery. We leverage modern technology to provide real-time tracking and transparent communication.
                </p>
                <button className="px-8 py-3 text-white bg-blue-600 rounded-lg shadow-lg font-semibold">
                  Learn More
                </button>
              </div>
              <div className="relative">
                <img
                  src={CompanyImg}
                  alt="Logistics Operations"
                  className="w-full h-80 object-cover rounded-xl shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg hidden md:block shadow-lg">
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-xs uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
            </div>

            {/* JCTrans Certificate Section */}
            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Certified Member</span>
                    <span className="text-gray-500 text-sm font-medium">Member ID: 160228</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">JCTrans Premium Membership</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We are proud to be an officially recognized <strong>JC Premium Member</strong>. This prestigious certification validates our compliance with global logistics standards and connects us to an elite network of international freight forwarders.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-orange-100 p-1.5 rounded-md">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p className="text-gray-600"><span className="font-semibold text-gray-800">Global Network:</span> Connect with a massive network of 160,000+ members worldwide.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-orange-100 p-1.5 rounded-md">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p className="text-gray-600"><span className="font-semibold text-gray-800">Financial Security:</span> Enhanced trust and payment protection within the JCTrans ecosystem.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-orange-100 p-1.5 rounded-md">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p className="text-gray-600"><span className="font-semibold text-gray-800">Service Excellence:</span> Rigorously audited to ensure premium handling of every shipment.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 opacity-20 rounded-full -mr-16 -mt-16"></div>
                  
                  <div className="relative group cursor-pointer">
                    <img
                      src={CertificateImg} 
                      alt="JCTrans Premium Certificate"
                      className="w-full max-w-sm rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-500 flex items-center justify-center rounded-lg">
                      <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur p-3 rounded-full shadow-xl">
                          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default About;