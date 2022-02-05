// import { useQuery } from "@apollo/client"
import { GET_ISSUES } from '../client/queries'
import { initializeApollo } from '../client'
import Test from "../components/atoms/test"

const Home = () => {
  // const { loading, error, data } = useQuery(GET_ISSUES)

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`

  return <div>
    {/* {data.issues.edges.map((issue, key) => (
            <div key={key}>
                <h2>{issue.node.title}</h2>
            </div>
    ))} */}

    <Test />
  </div>
}

export async function getStaticProps() {
  const client = initializeApollo();

  await client.query({
    query: GET_ISSUES,
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps() {
//   const client = initializeApollo();

//   await client.query({
//     query: GET_ISSUES,
//   });

//   return {
//     props: {
//       initialApolloState: client.cache.extract(),
//     }
//   };
// }

export default Home