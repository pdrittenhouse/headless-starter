// import { useQuery } from "@apollo/client"
import { GET_MENUS, GET_POSTS, GET_ISSUES } from '../client/queries'
import { initializeApollo } from '../client'
// import TestMenu from "../components/TestMenu"
import Test from "../components/Test"

const Home = () => {
  // const { loading, error, data } = useQuery(GET_POSTS)

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`

  return <>
    {/* {data.posts.edges.map((post, key) => (
            <div key={key}>
                <h2>{post.node.title}</h2>xx
            </div>
    ))} */}

    {/* <TestMenu /> */}
    <Test />
  </>
}

export async function getStaticProps() {
  const client = initializeApollo()

  // Menus
  await client.query({
    query: GET_MENUS,
  })

  // Posts
  await client.query({
    query: GET_POSTS,
  })

  // Issues
  await client.query({
    query: GET_ISSUES,
  })

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 1,
  }
}

// export async function getServerSideProps() {
//   const client = initializeApollo();

//   // Posts
//   await client.query({
//     query: GET_POSTS,
//   });

//   // Issues
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