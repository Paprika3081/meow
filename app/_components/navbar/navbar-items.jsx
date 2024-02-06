import Link from 'next/link';

const items = [
  {
    id: 1,
    title: 'ГЛАВНАЯ',
    path: '/',
  },
  {
    id: 2,
    title: 'ИСТОРИЯ',
    path: '/history',
  },
  {
    id: 3,
    title: 'КАТАЛОГ',
    path: '/catalog',
  },
  {
    id: 4,
    title: 'КОНТАКТЫ',
    path: '/contacts',
  },
  {
    id: 3,
    title: 'ДОПОЛНИТЕЛЬНО',
    path: '/',
  },
];

const NavbarItems = ({ pathname }) => {
  return (
    <div
      className={
        'flex flex-col cursor-pointer absolute right-0 gap-1 list-none bg-white shadow-2xl p-3 md:flex-row md:gap-4 md:static md:bg-transparent md:shadow-none'
      }
    >
      {items.map((item) => (
        <li key={item.id}>
          <Link className={`${pathname === item.path ? 'text-amber-500' : ''}`} href={item.path}>
            {item.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export { NavbarItems };
