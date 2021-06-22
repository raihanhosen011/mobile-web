import '../styles/globals.css'
import '../styles/Products.css'
import '../styles/Chackout.css'
import "../styles/Footer.css";
import '../styles/Hero.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp