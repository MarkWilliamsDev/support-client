import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { StoreProvider } from '../src/StoreProvider'
import AppSpinner from '../src/components/ui/AppSpinner'
import MainHeader from '../src/components/headers/MainHeader'

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps}>
      <div className="container">
        <MainHeader />
        <div className="border p-2">
          <Component {...pageProps} />
        </div>
        <AppSpinner />
      </div>
    </StoreProvider>
  )
}

export default App
