import React, { useState } from 'react';

// Sample data
const products = [
  { id: 1, name: 'Product 1', price: 10, category: 'Category A' },
  { id: 2, name: 'Product 2', price: 20, category: 'Category B' },
  { id: 3, name: 'Product 3', price: 30, category: 'Category A' },
  { id: 4, name: 'Product 4', price: 40, category: 'Category B' },
  { id: 5, name: 'Product 5', price: 50, category: 'Category A' },
  { id: 6, name: 'Product 6', price: 10, category: 'Category A' },
  { id: 7, name: 'Product 7', price: 60, category: 'Category B' },
  { id: 8, name: 'Product 8', price: 70, category: 'Category A' },
  { id: 9, name: 'Product 9', price: 90, category: 'Category B' },
  { id: 10, name: 'Product 10', price: 100, category: 'Category A' },
  { id: 11, name: 'Product 11', price: 10, category: 'Category A' },
  { id: 12, name: 'Product 12', price: 20, category: 'Category B' },
  { id: 13, name: 'Product 13', price: 30, category: 'Category A' },
  { id: 14, name: 'Product 14', price: 40, category: 'Category B' },
  { id: 15, name: 'Product 15', price: 50, category: 'Category A' },
  { id: 16, name: 'Product 16', price: 10, category: 'Category A' },
  { id: 17, name: 'Product 17', price: 60, category: 'Category B' },
  { id: 18, name: 'Product 18', price: 70, category: 'Category A' },
  { id: 19, name: 'Product 19', price: 90, category: 'Category B' },
  { id: 20, name: 'Product 20', price: 100, category: 'Category A' },
  { id: 21, name: 'Product 21', price: 10, category: 'Category A' },
  { id: 22, name: 'Product 22', price: 20, category: 'Category B' },
  { id: 23, name: 'Product 23', price: 30, category: 'Category A' },
  { id: 24, name: 'Product 24', price: 40, category: 'Category B' },
  { id: 25, name: 'Product 25', price: 50, category: 'Category A' },
  { id: 26, name: 'Product 26', price: 10, category: 'Category A' },
  { id: 27, name: 'Product 27', price: 60, category: 'Category B' },
  { id: 28, name: 'Product 28', price: 70, category: 'Category A' },
  { id: 29, name: 'Product 29', price: 90, category: 'Category B' },
  { id: 30, name: 'Product 30', price: 100, category: 'Category A' },
];

const ProductFilter = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({ ...priceRange, [name]: parseInt(value) });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterProducts = () => {
    let filtered = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }
    setFilteredProducts(filtered);
  };

  return (
    <>
      <p className="bg-gray-800">Filter your products</p>
      <div className="w-screen bg-blue-100 mx-auto p-4 grid sm:grid-cols-4 gap-4 font-mono">
        <div className="col-span-1">
          <div className="mb-4">
            <p className="my-3 font-bold">Filter your products:</p>
            <label className="block text-gray-700">Min Price:</label>
            <input
              type="range"
              name="min"
              min="0"
              max="100"
              value={priceRange.min}
              onChange={handlePriceChange}
              className="w-full mt-1"
            />
            <span className="text-gray-700">{priceRange.min}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Max Price:</label>
            <input
              type="range"
              name="max"
              min="0"
              max="100"
              value={priceRange.max}
              onChange={handlePriceChange}
              className="w-full mt-1"
            />
            <span className="text-gray-700">{priceRange.max}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full mt-1 p-2"
            >
              <option value="All">All</option>
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
            </select>
          </div>
          <button
            onClick={filterProducts}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Apply Filter
          </button>
        </div>
        <div className="col-span-3 sm:grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-blue-200 rounded-lg p-4 shadow-lg  mt-4"
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">RM {product.price}</p>
              <p className="text-gray-600">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
