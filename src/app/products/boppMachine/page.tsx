export default function Product() {
    const product = 
    {
      "id": "1",
      "name": "Modern Chair",
      "description": "A comfortable and stylish chair, perfect for modern interiors. Made with high-quality materials, this chair combines aesthetics with functionality. Its sleek design and ergonomic features make it a great addition to any living space.",
      "image": "/images/chair.jpg",
      "price": "$99.99"
    }
    ;
  
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full h-64 bg-aqua-500">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-aqua-600">{product.name}</h1>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <p className="mt-6 text-2xl font-semibold text-aqua-700">{product.price}</p>
          </div>
        </div>
      </div>
    );
  }