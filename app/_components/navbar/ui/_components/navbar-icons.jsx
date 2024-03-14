import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <Link href="https://www.youtube.com/">
        <a target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10 md:w-12 md:h-12 text-red-500 hover:text-red-700 transition duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.5 12L4 21V3l16.5 9zm-14 0v-1l8-4-8-4v-1l10 5-10 5z"
            />
          </svg>
        </a>
      </Link>
      <Link href="https://t.me/">
        <a target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10 md:w-12 md:h-12 text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 2L4 8v12a2 2 0 002 2h12a2 2 0 002-2V8l-6-4zm0 0h6M9 15l3-3 2 2"
            />
          </svg>
        </a>
      </Link>
      <Link href="https://vk.com/">
        <a target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10 md:w-12 md:h-12 text-blue-900 hover:text-blue-700 transition duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 4h4v16h-4zm-4 2h2M8 6h4M8 18h4M8 12h.01M8 16h.01"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default SocialIcons;
