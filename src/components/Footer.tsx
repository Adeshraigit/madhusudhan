// // 'use client';

// // function Footer() {
// //     return (
// //         <footer className="bg-white text-gray-800 py-12">
// //             <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
// //                 <div>
// //                     <h2 className="text-[#1E90FF] text-lg font-semibold mb-4">About Us</h2>
// //                     <p className="mb-4">
// //                     Water Treatment Plant, Water Filter Accessories, Water Bottle Filling Machine, Blowing Machine, Industrial Filtration, Mineral Water Plants & Machinery, etc.
// //                     </p>
// //                 </div>
// //                 <div>
// //                     <h2 className="text-[#1E90FF] text-lg font-semibold mb-4">Quick Links</h2>
// //                     <ul>
// //                         <li>
// //                             <a
// //                                 href="#"
// //                                 className="hover:text-[#1E90FF] transition-colors duration-300"
// //                             >
// //                                 Phone: 9820142424
// //                             </a>
// //                         </li>
// //                         <li>
// //                             <a
// //                                 href="#"
// //                                 className="hover:text-[#1E90FF] transition-colors duration-300"
// //                             >
// //                                 Email:<br/> madhusudanaqua.ind@gmail.com
// //                             </a>
// //                         </li>
// //                     </ul>
// //                 </div>
// //                 <div>
// //                     <h2 className="text-[#1E90FF] text-lg font-semibold mb-4">Follow Us</h2>
// //                     <div className="flex space-x-4">
// //                         <a
// //                             href="#"
// //                             className="hover:text-[#1E90FF] transition-colors duration-300"
// //                         >
// //                             Facebook
// //                         </a>
// //                         <a
// //                             href="#"
// //                             className="hover:text-[#1E90FF] transition-colors duration-300"
// //                         >
// //                             Twitter
// //                         </a>
// //                         <a
// //                             href="#"
// //                             className="hover:text-[#1E90FF] transition-colors duration-300"
// //                         >
// //                             Instagram
// //                         </a>
// //                     </div>
// //                 </div>
// //                 <div>
// //                     <h2 className="text-[#1E90FF] text-lg font-semibold mb-4">Address: </h2>
// //                     <p>Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada, Waliv Village, Vasai East, Vasai - 401208, Maharashtra, India</p>
// //                 </div>
// //             </div>
// //             <p className="text-center text-xs pt-8 text-gray-600">© 2024 Madhusudan Aqua Industries. All rights reserved.</p>
// //         </footer>
// //     );
// // }

// // export default Footer;
// 'use client';

// function Footer() {
//     return (
//         <footer className="relative bg-[#1E90FF] text-white overflow-hidden">
//             {/* Wavy Water Animation */}
//             <div className="absolute top-0 left-0 right-0 overflow-hidden">
//                 <div className="wave-bg w-full h-24 bg-[#1E90FF]"></div>
//             </div>
            
//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-12 pt-20 pb-12 relative z-10">
//                 {/* About Us Section */}
//                 <div>
//                     <h2 className="text-white text-xl font-semibold mb-4">About Us</h2>
//                     <p className="leading-relaxed text-sm text-gray-200 mb-6">
//                         We specialize in Water Treatment Plants, Water Filter Accessories, Bottle Filling Machines, and Industrial Filtration. Our products ensure quality and reliability.
//                     </p>
//                 </div>

//                 {/* Contact Info Section */}
//                 <div>
//                     <h2 className="text-white text-xl font-semibold mb-4">Contact Info</h2>
//                     <ul className="text-sm space-y-4">
//                         <li className="hover:text-gray-200 transition-colors">
//                             <span className="font-medium">Phone: </span> 9820142424
//                         </li>
//                         <li className="hover:text-gray-200 transition-colors">
//                             <span className="font-medium">Email: </span><br/> madhusudanaqua.ind@gmail.com
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Follow Us Section */}
//                 <div>
//                     <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
//                     <div className="flex space-x-6">
//                         <a href="#" className="hover:text-gray-200 transition-colors duration-300">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.59.59-2.46.7a4.27 4.27 0 001.88-2.35 8.55 8.55 0 01-2.7 1.04 4.26 4.26 0 00-7.29 3.88 12.13 12.13 0 01-8.79-4.45 4.28 4.28 0 001.32 5.7 4.27 4.27 0 01-1.93-.54v.06a4.27 4.27 0 003.42 4.18 4.28 4.28 0 01-1.92.07 4.27 4.27 0 003.99 2.95A8.57 8.57 0 014 19.85a12.09 12.09 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 5.51a8.55 8.55 0 01-2.54.7z"/></svg>
//                         </a>
//                         <a href="#" className="hover:text-gray-200 transition-colors duration-300">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.08C22 6.48 17.52 2 12 2S2 6.48 2 12.08c0 4.85 3.62 8.86 8.32 9.73.61.11.82-.27.82-.6v-2.24c-3.36.73-4.06-1.63-4.06-1.63-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.74.08-.74 1.21.08 1.85 1.24 1.85 1.24 1.09 1.87 2.86 1.33 3.56 1.02.11-.79.43-1.33.79-1.64-2.68-.31-5.49-1.35-5.49-6.02 0-1.33.47-2.43 1.24-3.28-.13-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.25.95-.27 1.97-.41 2.98-.41 1.01 0 2.03.14 2.98.41 2.29-1.57 3.29-1.25 3.29-1.25.67 1.7.26 2.96.13 3.27.77.85 1.24 1.95 1.24 3.28 0 4.69-2.81 5.7-5.5 6 .44.37.83 1.1.83 2.23v3.31c0 .34.21.72.83.6 4.71-.87 8.33-4.88 8.33-9.73z"/></svg>
//                         </a>
//                         <a href="#" className="hover:text-gray-200 transition-colors duration-300">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.98 3H7.02C5.23 3 4 4.25 4 6v12c0 1.75 1.23 3 3.02 3h9.96C18.77 21 20 19.75 20 18V6c0-1.75-1.23-3-3.02-3zm.52 15h-2.74V12.9c0-1.95-.66-3.28-2.3-3.28-1.25 0-1.99.86-2.32 1.7-.12.29-.15.69-.15 1.1v4.57H8.25s.04-7.41 0-8.18h2.74v1.16c.36-.56 1-1.35 2.43-1.35 1.78 0 3.12 1.16 3.12 3.65V18z"/></svg>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Address Section */}
//                 <div>
//                     <h2 className="text-white text-xl font-semibold mb-4">Address</h2>
//                     <p className="text-sm text-gray-200">
//                         Gala No.5, Bld. No. 6, Parsawanath Industrial Estate, Kolekar Pada, Waliv Village, Vasai East, Vasai - 401208, Maharashtra, India
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-10 border-t border-gray-200 pt-8 text-center relative z-10">
//                 <p className="text-sm text-gray-300">© 2024 Madhusudan Aqua Industries. All rights reserved.</p>
//             </div>

//             {/* Water Animation using CSS */}
//             <style jsx>{`
//                 .wave-bg {
//                     background: url('/wave.svg') repeat-x;
//                     animation: wave 6s cubic-bezier(0.6, 0.04, 0.98, 0.34) infinite;
//                 }
//                 @keyframes wave {
//                     0% { background-position-x: 0; }
//                     100% { background-position-x: 1000px; }
//                 }
//             `}</style>
//         </footer>
//     );
// }

// export default Footer;
'use client';
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-12">
        {/* About Us Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm text-blue-100">
            Specializing in Water Treatment Plants, Water Filter Accessories, Bottle Filling Machines, and Industrial Filtration. Our products ensure quality and reliability.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors duration-300 flex items-center">
                <span className="mr-2">📞</span> 9820142424
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors duration-300 flex items-center">
                <span className="mr-2">📧</span> madhusudanaqua.ind@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <p className="text-sm text-blue-100">
            Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada, Waliv Village, Vasai East, Vasai - 401208, Maharashtra, India
          </p>
        </div>
      </div>

      <div className="border-t border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-blue-100">
          © 2024 Madhusudan Aqua Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;