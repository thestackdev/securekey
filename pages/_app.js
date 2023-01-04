import '../styles/globals.css'
import { Inter } from '@next/font/google'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} flex flex-col h-full`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
