import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import '../styles/style.css'
import "../styles/login.css"
import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <StoreProvider>
    {getLayout(<Component {...pageProps} />)}
  </StoreProvider>

}

export default MyApp
