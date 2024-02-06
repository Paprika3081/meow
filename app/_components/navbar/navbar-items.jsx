import Link from "next/link";

const items = [
  {
    id: 1,
    title: "Домашняя",
    path: "/",
  },
  {
    id: 2,
    title: "О нас",
    path: "/about",
  },
  {
    id: 3,
    title: "Контакты",
    path: "/contacts",
  },
];

const NavbarItems = ({ pathname }) => {
  return (
    <div
      className={
        "flex flex-col absolute right-0 gap-1 list-none bg-white shadow-2xl p-3 md:flex-row md:gap-4 md:static md:bg-transparent md:shadow-none"
      }
    >
      {items.map((item) => (
        <li key={item.id}>
          <Link
            className={`${pathname === item.path ? "text-amber-500" : ""}`}
            href={item.path}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export { NavbarItems };
