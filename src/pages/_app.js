import '../styles/_base.scss'
import { ApolloProvider } from "@apollo/client"
import { client } from '../client'

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
}

export default MyApp
