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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    description: 'Learn how to set up and operate the water pump efficiently.',
  },
  {
    id: 2,
    title: 'Irrigation System Overview',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    description: 'A comprehensive overview of our advanced irrigation systems.',
  },
  // Add more videos here...
];

const VideosPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-[#1E90FF] mb-8 text-center">
          Product Demo Videos
        </h1>
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
    </div>
  );
};

export default VideosPage;
