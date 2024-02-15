import Link from "next/link"

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
    title: "КОНТАКТЫ",
    path: "/contacts",
  },
  {
    id: 5,
    title: "ДОПОЛНИТЕЛЬНО",
    path: "/",
  },
]

const NavbarItems = ({ pathname }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id} className={"p-2"}>
          <Link
            className={`${pathname === item.path ? "text-amber-500" : ""}`}
            href={item.path}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  )
}

export { NavbarItems }
