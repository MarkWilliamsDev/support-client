import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { StoreProvider } from '../src/StoreProvider'
import AppSpinner from '../src/components/ui/AppSpinner'

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
        <AppSpinner />
      </div>
    </StoreProvider>
  )
}

export default App
