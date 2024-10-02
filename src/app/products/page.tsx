// pages/products/index.tsx

interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Filling Machine',
    image: '/images/chair.jpg',
    url: '/products/fillingMachine',
  },
  {
    id: '2',
    name: 'DM Water Plant',
    image: '/images/lamp.jpg',
    url: '/products/dmWaterPlant',
  },
  {
    id: '3',
    name: 'Blowing Machine',
    image: '/images/sofa.jpg',
    url: '/products/blowingMachine',
  },
  {
    id: '4',
    name: 'BOPP Machine',
    image: '/images/table.jpg',
    url: '/products/boppMachine',
  },
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-10 mb-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          Products
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <a href={product.url} key={product.id} className="">
          <div key={product.id} className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-56 bg-white group-hover:opacity-75 sm:h-64 lg:h-72">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
            </div>
          </div>
          </a>
        ))}
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
}
