import React from 'react';

interface Video {
  id: number;
  title: string;
  videoUrl: string;
  description: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'Water Pump Demo',
    videoUrl: 'https://www.youtube.com/embed/YhP-DMvV7oY?si=2YN8OMgR4Hn5l785',
    description: 'Learn how to set up and operate the water pump efficiently.',
  },
  {
    id: 2,
    title: 'Irrigation System Overview',
    videoUrl: 'https://www.youtube.com/embed/izo4npntcWU?si=Bda060WgZf7mVPqg',
    description: 'A comprehensive overview of our advanced irrigation systems.',
  },
];

const VideosPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-10 mb-12">
        <h1 className="text-5xl font-bold text-center mb-4">
        Product Demo Videos
        </h1>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="border border-[#1E90FF] rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-64 bg-gray-200">
                <iframe
                  className="w-full h-full"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#1E90FF] mb-2">{video.title}</h2>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
    <section className="text-center py-12">
      <h3 className="text-3xl font-bold mb-4 text-blue-600">
        Ready to Find Your Perfect Water Solution?
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        Contact Madhusudan Aqua Industries today and let us help you with our innovative water treatment solutions.
      </p>
      <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
        <a href="/contact">
        Get In Touch
        </a>
      </button>
    </section>
    </div>
  );
};

export default VideosPage;
