// app/_components/head_head/ui/CustomHead.jsx
'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
import SiteMenu from './SiteMenu';

const CustomHead = ({ title, description, keywords, image, showMenu = true }) => {
  useEffect(() => {
    document.title = title; // Устанавливаем заголовок документа
  }, [title]);

  const metaDescription = description || "АО Совхоз Южно-Сахалинский: создаем вкусные, натуральные и полезные продукты для вашего здорового образа жизни."; // Описание страницы
  const metaKeywords = keywords || "сельское хозяйство, Совхоз Южно-Сахалинский, АО Совхоз Южно-Сахалинский, агросахалин, agrosakhalin, продукты, натуральные продукты, здоровый образ жизни"; // Ключевые слова для поисковых систем

  return (
    <>
      <Head>
        <title>{title}</title> {/* Заголовок страницы */}
        <meta name="description" content={metaDescription} /> {/* Краткое описание страницы */}
        <meta name="keywords" content={metaKeywords} /> {/* Ключевые слова для страницы */}
        <meta name="publisher" content="Акционерное Общество Совхоз Южно-Сахалинский" /> {/* Информация об издателе страницы */}
        <meta name="robots" content="index, follow" /> {/* Указание поисковым роботам индексировать страницу и следовать по ссылкам */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Установка viewport для адаптивного дизайна */}
        <meta property="og:title" content={title} /> {/* Заголовок для Open Graph (используется в социальных сетях) */}
        <meta property="og:description" content={metaDescription} /> {/* Описание для Open Graph */}
        <meta property="og:type" content="website" /> {/* Тип объекта Open Graph */}
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} /> {/* URL страницы для Open Graph */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> {/* Значок для устройств Apple */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> {/* Значок 32x32 */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> {/* Значок 16x16 */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" /> {/* Значок по умолчанию */}
      </Head>
      {showMenu && <SiteMenu />}
    </>
  );
};

export default CustomHead;
