import { Comfortaa } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer/ui/footer';
import { ToTopButton } from './_components/to-top-button/ui/to-top-button';


const font = Comfortaa({ subsets: ['cyrillic', 'latin'], weight: ['400'] });

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
        <ToTopButton className="fixed bottom-10 right-10 w-[50px] h-[50px] text-[#ada295] cursor-pointer" />
        <Footer />
      </body>
    </html>
  );
}
