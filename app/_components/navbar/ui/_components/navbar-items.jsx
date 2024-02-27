'use client'

import Link from "next/link"
import React, { useState} from 'react';

const items = [
  {
    id: 1,
    title: "ГЛАВНАЯ",
    path: "/"
  },
  {
    id: 2,
    title: "ИСТОРИЯ",
    path: "/history"
  },
  {
    id: 3,
    title: "КАТАЛОГ",
    path: "/catalog"
  },
  {
    id: 4,
    title: "КОНТАКТЫ",
    path: "/contacts"
  },
  {
    id: 5,
    title: "ДОПОЛНИТЕЛЬНО",
    path: "/",
    subItems: [
      {
        id: 6,
        title: "ДОКУМЕНТЫ",
        path: "/documents"
      },
      {
        id: 7,
        title: "ЗАКАЗЧИКАМ",
        path: "/customers"
      }
    ]
  }
];

const NavbarItems = ({ pathname }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <ul className="flex relative">
      {items.map((item) => (
        <li key={item.id} className="p-2" onMouseEnter={item.title === "ДОПОЛНИТЕЛЬНО" ? handleMouseEnter : null} onMouseLeave={item.title === "ДОПОЛНИТЕЛЬНО" ? handleMouseLeave : null}>
          {item.subItems && item.title === "ДОПОЛНИТЕЛЬНО" ? (
            <>
              <span>{item.title}</span>
              {showSubMenu && (
                <ul className="absolute left-200 mt-2 bg-white shadow-md">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id} className="p-2">
                      <a
                        className={`${pathname === subItem.path ? "text-amber-500" : "z-10"}`}
                        href={subItem.path}
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <a
              className={`${pathname === item.path ? "text-amber-500 " : ""}`}
              href={item.path}
            >
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export  { NavbarItems };
