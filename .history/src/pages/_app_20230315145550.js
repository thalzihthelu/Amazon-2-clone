import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    
  <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    
  
  )
}

import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

