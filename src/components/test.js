import { useQuery } from "@apollo/client"
import { GET_POSTS, GET_ISSUES } from '../client/queries'
import { useState } from "react"

const Test = () => {
  // Get Posts
  const { loading, error, data } = useQuery(GET_POSTS)
  
  // Get Issues
  const { loading: loadingIssues, error: errIssues, data: allIssues } = useQuery(GET_ISSUES)

  if (error || errIssues) return <div>Error loading players.</div>
  if (loading || loadingIssues) return <div>Loading</div>

  // Posts State
  const [posts, setPosts] = useState(data.posts.edges)

  // Issues State
  const [issues, setIssues] = useState(allIssues.issues.edges)

  return <div>

    {/* Posts */}
    {posts.map((post, key) => (
      <div key={key}>
        <h5>{post.node.title}</h5>
      </div>
    ))}
    
    {/* Issues */}
    {issues.map((issue, key) => (
      <div key={key}>
        <h5>{issue.node.title}</h5>
      </div>
    ))}
  </div>
};

export default Test
