import { Comfortaa } from "next/font/google"
import Head from 'next/head'
import "./globals.css"
import { Navbar } from "./_components/navbar"
import { Footer } from "./_components/footer/ui/footer"
import { ToTopButton } from "./_components/to-top-button/ui/to-top-button"

const font = Comfortaa({ subsets: ["cyrillic", "latin"], weight: ["400"] })

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <title>АО Совхоз Южно-Сахалинский</title>
        <meta name="description" content="Совхоз Южно-Сахалинский: создаем вкусные, натуральные и полезные продукты для вашего здорового образа жизни." />
        <meta name="keywords" content="сельское хозяйство, Совхоз Южно-Сахалинский, продукты, натуральные продукты, здоровый образ жизни" />
        <meta name="publisher" content="Акционерное Общество Совхоз Южно-Сахалинский" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="АО Совхоз Южно-Сахалинский" />
        <meta property="og:description" content="Совхоз Южно-Сахалинский: создаем вкусные, натуральные и полезные продукты для вашего здорового образа жизни." />
        <meta property="og:image" content="https://telegram.org/img/t_logo.png" />
        <meta name="telegram:site" content="https://t.me/sovkhoz65" />
        <meta name="catalog" content="/catalog" />
        <meta name="contacts" content="/contacts" />
        <meta name="vacancy" content="/vacancy" />
      </Head>
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
        <ToTopButton className={'fixed bottom-10 right-10 w-[50px] h-[50px] text-[#ada295] cursor-pointer'} />
        <Footer />
      </body>
    </html>
  )
}
