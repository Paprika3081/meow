import React, { useEffect, useState } from 'react';
import { Product } from '../../product';
import { Button } from '@/app/_components/button/ui/button';

const ProductCatalog = () => {
  const [sortOption, setSortOption] = useState('default');
  const [filterOption, setFilterOption] = useState('all');
  const [fetchedData, setFetchedData] = useState([])
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    if (filterOption !== 'all') {
     const filterProducts = async () => {
       const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/products?category=${filterOption}`)
       const data = await response.json()
       setFilteredProducts(data)
     }
     filterProducts()
    } else {
     const fetchProducts = async () => {
       const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/products?page=1&limit=9`)
       const data = await response.json()
       setProducts(data)
     }
 
     fetchProducts()
    }
   }, [filterOption,page])

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
    <div className='container m-auto'>
      {/* Баннер специальных предложений */}
      <div className="bg-yellow-300 p-4 mb-4 lg:col-span-3">
        <h2 className="text-xl font-bold">Специальные предложения</h2>
        <ul>
          <li>Товар 1: скидка 10%</li>
          <li>Товар 2: подарок при покупке</li>
          {/* Добавьте остальные специальные предложения */}
        </ul>
      </div>

      {/* Панель с фильтрами */}
      <div className="mb-4 lg:col-span-3">
        <label htmlFor="filterOption" className="mr-2">Фильтр по категории:</label>
        <select
          id="filterOption"
          className="px-2 py-1 border rounded mr-4"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="all">Все товары</option>
          <option value="Молочная продукция">Молочная продукция</option>
          <option value="Овощи">Овощи</option>
          <option value="Мясная продукция">Мясная продукция</option>
        </select>
        <label htmlFor="sortOption" className="mr-2">Сортировать по:</label>
        <select
          id="sortOption"
          className="px-2 py-1 border rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">По умолчанию</option>
          <option value="priceLowToHigh">Цене (по возрастанию)</option>
          <option value="priceHighToLow">Цене (по убыванию)</option>
        </select>
      </div>

      {/* Грид с товарами */}
      <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
 
        {filterOption !== 'all' ? filteredProducts && filteredProducts.map((product) => (
          <Product id={product.id} name={product.name} image={product.image} price={product.price} description={product.description} discount={product?.discount}/> 
        )) : products.items && products.items.map((product) => (
          <Product id={product.id} name={product.name} image={product.image} price={product.price} description={product.description} discount={product?.discount}/> 
        ))}
        {filterOption === 'all' && products.items && fetchedData.map((product) => (
          <Product id={product.id} name={product.name} image={product.image} price={product.price} description={product.description} discount={product?.discount}/> 
        ))}
        {filterOption === 'all' && page !== products?.meta?.total_pages ?<Button onClick={loadMore}>Загрузить еще (Всего товаров: {products.meta && products.meta.total_items})</Button> : ''}
      </div>
    </div>
  );
};

export default ProductCatalog;
