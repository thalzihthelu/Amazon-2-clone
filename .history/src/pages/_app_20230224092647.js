import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Provider as AuthPovider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider></AuthProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
