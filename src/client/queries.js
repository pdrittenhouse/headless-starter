import { gql } from "@apollo/client"

export const GET_ISSUES = gql`
  query GetIssues {
  issues {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`