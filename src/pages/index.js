import { useQuery } from "@apollo/client"
import { GET_ISSUES as getIssues } from '../client/queries'

const Home = () => {
  const { loading, error, data } = useQuery(getIssues)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`

  return <div>
    {data.issues.edges.map((issue, key) => (
            <div key={key}>
                <h2>{issue.node.title}</h2>
            </div>
        ))}
  </div>
}

export default Home