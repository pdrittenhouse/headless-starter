import { useQuery } from "@apollo/client"
import { GET_MENUS } from '../client/queries'
import { useState } from "react"

const TestMenu = () => {
  // Get Menus
  const { loading, error, data } = useQuery(GET_MENUS)

  if (error) return <div>Error loading players.</div>
  if (loading) return <div>Loading</div>

  // Menu State
  const [menus, setPosts] = useState(data.menus.edges)

  return <div>

    {/* Menus */}
    {menus.map((menu, key) => (
      <div key={key}>
        <h5>{menu.node.slug}</h5>
      </div>
    ))}
    
  </div>
};

export default TestMenu
