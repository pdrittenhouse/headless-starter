import '../styles/_base.scss'
import { ApolloProvider } from '@apollo/client'
import { useApollo, initializeApollo } from '../client'
import Head from 'next/head'
import { GET_MENUS } from '../client/queries'
import Header from '../components/organisms/header'

const App = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState)
  return <ApolloProvider client={client}>
    <Head>
      <title>Headless Starter</title>
    </Head>

    <Header brandWidth={60} brandHeight={60} />
    
    <Component {...pageProps} />
  </ApolloProvider>
}

// export async function getStaticProps() {
//   const client = initializeApollo()

//   // Menus
//   await client.query({
//     query: GET_MENUS,
//   })

//   return {
//     props: {
//       initialApolloState: client.cache.extract(),
//     },
//     revalidate: 1,
//   }
// }

export default App
