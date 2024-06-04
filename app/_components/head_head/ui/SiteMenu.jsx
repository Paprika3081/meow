// app/_components/head_head/ui/SiteMenu.jsx
import React from 'react';
import Link from 'next/link';

const SiteMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/vacancy">
            Вакансии
          </Link>
        </li>
        <li>
          <Link href="/catalog">
            Продукция
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Контакты
          </Link>
        </li>
        <li>
          <Link href="/order">
            Заказчикам
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SiteMenu;
