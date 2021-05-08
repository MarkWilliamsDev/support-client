import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'

function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}

export default App
