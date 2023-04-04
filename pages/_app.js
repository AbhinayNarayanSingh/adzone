import Dialog from '@/hoc/layout/Dialog'
import Drawer from '@/hoc/layout/Drawer'
import Footer from '@/hoc/layout/Footer'
import Loader from '@/hoc/layout/Loader'
import Navbar from '@/hoc/layout/Navbar'

import '@/styles/style.map.scss'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Loader/>
      <Drawer/>
      <Dialog/>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
