import { initializeApollo } from '../client'
import { GET_MENUS } from '../client/queries'
import { getAllIcons } from '../components/atoms/Icon/allIcons'
import Icon from '../components/atoms/Icon'
import { Alert } from 'react-bootstrap'
import styles from '../styles/libs/bootstrap/alert.module.scss'

export async function getStaticProps() {
  const client = initializeApollo()

  // Get all icons
  const allIcons = getAllIcons()  

  // Menus
  await client.query({
    query: GET_MENUS,
  })

  return {
    props: {
      initialApolloState: client.cache.extract(),
      allIcons,
    },
    revalidate: 1,
  }
}

const Demo = ({ allIcons }) => {
  
  return <>
    {/* All Icons */}
    {allIcons.icons.map(icon => <Icon name={icon} className={`icon-${icon}`} width='32px' height='32px' color='' allIcons={allIcons} />)}

    {/* Alerts */}
    {[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    ].map((variant, idx) => (
      <Alert key={idx} variant={variant} className={styles.alert}>
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>This is a {variant} alert—check it out!</p>
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
      </Alert>
    ))}
  </>
}

export default Demo