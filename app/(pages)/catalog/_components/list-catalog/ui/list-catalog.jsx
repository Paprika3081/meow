import React, { useEffect, useState } from 'react';
import { Product } from '../../product';
import { Button } from '@/app/_components/button/ui/button';

// Функция для перемешивания элементов массива
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const ProductCatalog = () => {
  const [filterOption, setFilterOption] = useState('all');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // Добавляем состояние для общего количества страниц

  useEffect(() => {
    const fetchProducts = async () => {
      let url = `https://a4ddb814deba66b5.mokky.dev/products?page=${page}&limit=9`;
      if (filterOption !== 'all') {
        url += `&category=${filterOption}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (page === 1) {
        setProducts(data.items);
        setTotalPages(data.meta.total_pages); // Устанавливаем общее количество страниц
      } else {
        setProducts(prevProducts => [...prevProducts, ...data.items]);
      }
    };

    fetchProducts();
  }, [filterOption, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
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
            onChange={(e) => {
              setPage(1); // Сбрасываем страницу при изменении фильтра
              setFilterOption(e.target.value);
            }}
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
        {products.map((product) => (
          <Product key={product.id} title={product.title} image={product.image} description={product.description}/> 
        ))}
      </div>
      {/* Проверяем, нужно ли показывать кнопку "Загрузить еще" */}
      {page !== totalPages && <Button onClick={loadMore}>Загрузить еще</Button>}
    </div>
  );
};

export default ProductCatalog;
