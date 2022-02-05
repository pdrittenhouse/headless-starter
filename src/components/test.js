import { useQuery } from "@apollo/client"
import { GET_ISSUES } from '../client/queries'
import { useState } from "react"

const Test = () => {
    const { loading, error, data } = useQuery(GET_ISSUES)

    if (error) return <div>Error loading players.</div>;
    if (loading) return <div>Loading</div>;

    const [issues, setIssue] = useState(data.issues.edges)

    return <div>
      {issues.map((issue, key) => (
            <div key={key}>
                <h5>{issue.node.title}</h5>
            </div>
        ))}
  </div>
};

export default Test
