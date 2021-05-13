import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { StoreProvider } from '../src/StoreProvider'
import AppSpinner from '../src/components/ui/AppSpinner'
import MainHeader from '../src/components/headers/MainHeader'
import MainToolbar from '../src/components/ui/toolbars/MainToolbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps}>
      <div className="container">
        <MainHeader />
        <div className="py-2 px-3 bg-light">
          <MainToolbar />
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
