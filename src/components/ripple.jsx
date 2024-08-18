// pages/index.js
import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load jQuery
      const jQueryScript = document.createElement('script');
      jQueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
      jQueryScript.onload = () => {
        // Load the jQuery Ripples plugin after jQuery is loaded
        const ripplesScript = document.createElement('script');
        ripplesScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js';
        ripplesScript.onload = () => {
          // Initialize the ripple effect
          if (window.jQuery) {
            window.jQuery('.ripple-hero').ripples({
              resolution: 256,
              perturbance: 0.04,
            });
          }
        };
        document.body.appendChild(ripplesScript);
      };
      document.body.appendChild(jQueryScript);
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.jQuery) {
        window.jQuery('.ripple-hero').ripples('destroy');
      }
    };
  }, []);

  return (
    <div className="ripple-hero bg-blue-400 flex items-center justify-center h-[80vh] relative m-10 ml-0 mr-0">
      <div className="text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Madhusudan Aqua Industries</h1>
      </div>
    </div>
  );
}
