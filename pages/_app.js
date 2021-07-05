import 'bootstrap/dist/css/bootstrap.css'
import { StoreProvider } from '../src/StoreProvider'
import AppSpinner from '@/components/ui/AppSpinner'
import MainHeader from '@/components/headers/MainHeader'
import MainToolbar from '@/components/ui/toolbars/MainToolbar'

function App({ Component, pageProps }) {
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
