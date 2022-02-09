import { gql } from "@apollo/client"

export const GET_MENUS = gql`
  query GetMenus {
    menus {
      edges {
        node {
          id
          name
          menuId
          locations
          slug
          menuItems {
            edges {
              node {
                id
                label
                cssClasses
                target
                title
                url
                order
                childItems {
                  edges {
                    node {
                      cssClasses
                      description
                      id
                      label
                      menuItemId
                      order
                      target
                      title
                      url
                      childItems {
                        edges {
                          node {
                            cssClasses
                            description
                            id
                            label
                            order
                            menuItemId
                            target
                            title
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_POSTS = gql`
  query GetIssues {
    posts {
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