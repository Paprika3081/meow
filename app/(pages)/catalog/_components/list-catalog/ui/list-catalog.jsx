import React, { useState } from 'react';

const ProductCatalog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState('default');
  const [filterOption, setFilterOption] = useState('all');

  const products = [
    { 
      id: 1, 
      name: 'Молоко 2,5%  1 л.', 
      category: 'Молочная продукция',
      price: 0, 
      description: 'Молоко "Российское" с массовой долей жира : 2,5% /1 л.',
      image: './moloko-2.5.png', 
      sku: '113' 
    },
    { 
      id: 2, 
      name: 'Молоко  3,2%  1 л.', 
      category: 'Молочная продукция',
      price: 0, 
      description: 'Молоко "Российское" питьевое с массовой долей жира : 3,2% /1 л.',
      image: './moloko-3.2.png', 
      sku: '114' 
    },
    { 
      id: 3, 
      name: 'Молоко 3,2%  0.5 л.', 
      category: 'Молочная продукция',
      price: 0, 
      description: 'Молоко "Российское" 3,2% /0,5 л.',
      image: './moloko-2.5.png', 
      sku: '131' 
    },
    { 
      id: 4, 
      name: 'Молоко 2,5% 0.5 л.', 
      category: 'Молочная продукция',
      price: 0, 
      description: 'Молоко "Российское" 2,5% 0,5 л.',
      image: './noname.jpg', 
      sku: '132' 
    },
    { 
      id: 5, 
      name: 'Молоко "Цельное отборное" 4,5-6,0%  0,5 л.', 
      category: 'Молочная продукция',
      price: 0, 
      description: 'Молоко "Цельное отборное" 4,5-6,0%  0,5 л.',
      image: './noname.jpg', 
      sku: '140' 
    },
    { 
      id: 6, 
      name: 'Сыворотка 1 л.', 
      category: 'Молочная продукция',
      price: 0, 
      description: 'Сыворотка 1 л.',
      image: './noname.jpg', 
      sku: '000000483' 
    },
    { 
      id: 7, 
      name: 'Йогурт вишня 3,2% 0,4 кг.', 
      category: 'Молочная продукция',
      price: 0, 
      description: 'Йогурт вишня 3,2% 0,4 кг.',
      image: './noname.jpg', 
      sku: 'SKU789' 
    },
    // { 
    //   id: 8, 
    //   name: 'Молоко', 
    //   category: 'Молочная продукция',
    //   price: 0, 
    //   description: 'Молоко "Российское" 3,2% /0,5 л.',
    //   image: './moloko-2.5.png', 
    //   sku: '' 
    // },
    // { 
    //   id: 9, 
    //   name: '', 
    //   category: '',
    //   price: 0, 
    //   description: '',
    //   image: './moloko-2.5.png', 
    //   sku: '' 
    // },





    // Добавьте остальные товары здесь
  ];

  // Функция для сортировки и фильтрации товаров
  const filterAndSortProducts = (option) => {
    let filteredProducts = [...products];
    
    if (filterOption !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === filterOption);
    }

    if (option === 'sku') {
      return filteredProducts.sort((a, b) => a.sku.localeCompare(b.sku));
    } else if (option === 'priceLowToHigh') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'priceHighToLow') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      return filteredProducts;
    }
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div>
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
          <option value="sku">Артикулу</option>
          <option value="priceLowToHigh">Цене (по возрастанию)</option>
          <option value="priceHighToLow">Цене (по убыванию)</option>
        </select>
      </div>

      {/* Грид с товарами */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterAndSortProducts(sortOption).map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="mb-2 mx-auto" style={{ maxWidth: '100%' }} />
            <h3 className="text-xl font-bold text-center">{product.name}</h3>
            <p className="text-gray-700 text-center">Цена: {product.price} руб.</p>
            <p className="text-gray-700 text-center">Артикул: {product.sku}</p>
            <button
              onClick={() => handleOpenModal(product)}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>
      
      {/* Модальное окно */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="text-gray-700">Цена: {selectedProduct.price} руб.</p>
            <p className="text-gray-700">Артикул: {selectedProduct.sku}</p>
            <p className="text-gray-700">{selectedProduct.description}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
