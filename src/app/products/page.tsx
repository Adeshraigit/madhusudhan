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
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Products</h1>
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
    </div>
  );
}
