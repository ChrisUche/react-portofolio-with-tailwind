import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import NavBar from './components/homepage/NavBar'

function MyApp({ Component, pageProps, router }) {
  return (<>
      <NavBar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
  </>
      
    )
    
}

export default MyApp
