import React, { useEffect, useState } from 'react';

export const Product = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [css, setCss] = useState(true);
  const itemsPerPage = 8;
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActiveButton(pageNumber); // Update the active button
  };

  return (
    <div className='mt-10 mb-4 lg:p-4'>
      <span className='text-xl md:text-3xl font-bold'>
        Discover our handpicked selection of Premium Groceries:🛒
      </span>
      <div className="w-full h-fit mt-8 grid gap-10 container-product">
        {currentItems.map((item) => (
          <div className='product-card p-4 cursor-pointer flex justify-center items-center flex-col h-fit' key={item.id}>
            <div className='image-div'><img className='image w-full h-full' src={item.image} alt={item.title} /></div>
            <div className='title font-bold w-full mt-2'>{item.title}</div>
            <div className='desc overflow-y-auto text-sm mt-2'>{item.description}</div>
            <div className='rating mt-2'><span className='font-bold'>Rating: </span>{item.rating.rate}</div>
          </div>
        ))}
      </div>
      <div className="pagination mt-5 flex justify-end">
        {Array.from({ length: Math.ceil(product.length / itemsPerPage) }, (_, i) => (
          <button
            className={`w-8 h-8 rounded-xl mr-2 hover:scale-105 ${i + 1 === activeButton ? 'active' : ''}`}
            key={i}
            onClick={() => paginate(i + 1)}
            style={i + 1 === activeButton ? (css ? { background: 'blue', color: 'white' } : {}) : {}} // Apply style to the active button
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
