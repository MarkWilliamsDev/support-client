import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { StoreProvider } from '../src/StoreProvider'

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>The Support Client</h1>
          </div>
        </div>
        <div className="border p-2">
          <Component {...pageProps} />
        </div>
      </div>
    </StoreProvider>
  )
}

export default App
