"use client";

import React, { useState } from "react";

const items = [
  {
    id: 1,
    title: "ГЛАВНАЯ",
    path: "/",
  },
  {
    id: 2,
    title: "ИСТОРИЯ",
    path: "/history",
  },
  {
    id: 3,
    title: "КАТАЛОГ",
    path: "/catalog",
  },
  {
    id: 4,
    title: "НОВОСТИ",
    path: "/news",
  },
  {
    id: 5,
    title: "КОНТАКТЫ",
    path: "/contacts",
  },
  {
    id: 6,
    title: "ДОПОЛНИТЕЛЬНО",
    path: "/",
    subItems: [
      {
        id: 7,
        title: "ДОКУМЕНТЫ",
        path: "/documents",
      },
      {
        id: 8,
        title: "ЗАКАЗЧИКАМ",
        path: "/order",
      },
      {
        id: 9,
        title: "ВАКАНСИИ",
        path: "/vacancy",
      },
    ],
  },
];

const NavbarItems = ({ pathname }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <>
      <ul className="hidden md:flex items-center cursor-pointer">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-2 relative"
            onClick={item.title === "ДОПОЛНИТЕЛЬНО" ? toggleSubMenu : null}
          >
            {item.subItems && item.title === "ДОПОЛНИТЕЛЬНО" ? (
              <>
                <span
                  className={`block p-2 ${showSubMenu ? "font-bold text-white border-b-2 border-[#ffffff]" : ""}`}
                >
                  {item.title}
                </span>
                <ul
                  className={`absolute bg-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform ${
                    showSubMenu ? "translate-y-0 opacity-100 max-h-96" : "-translate-y-4 opacity-0 max-h-0"
                  } overflow-hidden`}
                  style={{ top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)" }}
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id} className="p-2">
                      <a
                        className={`block p-2 ${pathname === subItem.path ? "font-bold border-b-2 bg-[#ffffff] text-gray-600" : ""}`}
                        href={subItem.path}
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a
                className={`block p-2 ${pathname === item.path ? "font-bold border-b-2 border-[#ffffff] text-white" : ""}`}
                href={item.path}
              >
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
      <ul className="md:hidden flex flex-col items-center font-bold cursor-pointer">
        {items
          .filter((item) => item.id <= 5) // Показываем только основные пункты
          .map((item) => (
            <li key={item.id} className="p-2">
              <a
                className={`block p-2 ${pathname === item.path ? "font-bold border-b-2 border-[#ffffff] text-white" : ""}`}
                href={item.path}
              >
                {item.title}
              </a>
            </li>
          ))}
        {items.find((item) => item.title === "ДОПОЛНИТЕЛЬНО") && (
          <li
            className="p-2 relative"
            onClick={toggleSubMenu}
          >
            <span
              className={`block p-2 ${showSubMenu ? "font-bold text-white border-b-2 border-[#ffffff]" : ""}`}
            >
              ДОПОЛНИТЕЛЬНО
            </span>
            <ul
              className={`absolute bg-white shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform ${
                showSubMenu ? "translate-y-0 opacity-100 max-h-96" : "-translate-y-4 opacity-0 max-h-0"
              } overflow-hidden`}
              style={{ top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)" }}
            >
              {items
                .find((item) => item.title === "ДОПОЛНИТЕЛЬНО")
                .subItems.map((subItem) => (
                  <li key={subItem.id} className="p-2">
                    <a
                      className={`block p-2 ${pathname === subItem.path ? "font-bold border-b-2 bg-[#ffffff] text-gray-600" : ""}`}
                      href={subItem.path}
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
            </ul>
          </li>
        )}
      </ul>
    </>
  );
};

export { NavbarItems };
