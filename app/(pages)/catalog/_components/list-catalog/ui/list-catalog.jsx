import React, { useEffect, useState } from 'react';
import { Product } from '../../product';
import { Button } from '@/app/_components/button/ui/button';

const ProductCatalog = () => {
  const [filterOption, setFilterOption] = useState('all');
  const [fetchedData, setFetchedData] = useState([]);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (filterOption !== 'all') {
      const filterProducts = async () => {
        const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/products?category=${filterOption}`);
        const data = await response.json();
        setFilteredProducts(data);
      };
      filterProducts();
    } else {
      const fetchProducts = async () => {
        const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/products?page=1&limit=9`);
        const data = await response.json();
        setProducts(data);
      };

      fetchProducts();
    }
  }, [filterOption, page]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const fetchMore = async () => {
      const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/products?page=${nextPage}&limit=9`);
      const data = await response.json();
      setFetchedData(prevData => [...prevData, ...data.items]);
    };

    fetchMore();
  };

  return (
    <div className='container mx-auto p-6'>
      {/* Панель с фильтрами */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <label htmlFor="filterOption" className="mr-2">Фильтр по категории:</label>
          <select
            id="filterOption"
            className="px-2 py-1 border rounded mr-4 bg-gray-100"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="all">Все товары</option>
            <option value="Молочная продукция">Молочная продукция</option>
            <option value="Овощи">Овощи</option>
            <option value="Мясная продукция">Мясная продукция</option>
          </select>
        </div>
      </div>

      {/* Грид с товарами */}
      <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? filteredProducts.map((product) => (
          <Product key={product.id} name={product.name} image={product.image} description={product.description}/> 
        )) : products.items && products.items.map((product) => (
          <Product key={product.id} name={product.name} image={product.image} description={product.description}/> 
        ))}
        {filteredProducts.length === 0 && page !== products?.meta?.total_pages ? <Button onClick={loadMore}>Загрузить еще (Всего товаров: {products.meta && products.meta.total_items})</Button> : ''}
      </div>
    </div>
  );
};

export default ProductCatalog;
