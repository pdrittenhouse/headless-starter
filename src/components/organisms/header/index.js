import styles from './header.module.scss'
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    SplitButton
} from 'react-bootstrap'
import Brand from '../../atoms/brand'
import { useQuery } from "@apollo/client"
import { GET_MENUS } from '../../../client/queries'
import { useState } from "react"

const Header = (props) => {
    // Get Menus
    const { loading, error, data } = useQuery(GET_MENUS)

    if (error) return <div>Error loading menus.</div>
    if (loading) return <div>Loading</div>

    // Menus State
    const [menus, setMenus] = useState(data.menus)

    return <header className={styles.siteHeader}>
        <Navbar bg="" variant="" sticky="top" expand="lg" className={styles.navbar}>
            <Container fluid className={styles.container}>
                <Row>
                    <Col sm={3} className={styles.siteHeaderBranding}>
                        <Navbar.Brand className={styles.navbarBrand} href="#home">
                            <Brand brandWidth={props.brandWidth} brandHeight={props.brandHeight} className={styles.navbarBrand} />
                        </Navbar.Brand>
                    </Col>
                    <Col className={styles.siteHeaderNavigation}>
                        <Navbar.Toggle aria-controls="navbarScroll" className={styles.navbarToggler} />
                        <Navbar.Collapse id="navbarScroll" className={styles.navbarCollapse}>
                            <Nav variant="" className={styles.navbarNav} navbarScroll>
                                {data.menus.edges.map(menu => {
                                    const node = menu.node
                                    if (node.locations.includes('PRIMARY')) {
                                        const items = node.menuItems.edges.map(item => {
                                            return item.node
                                        })
                                        return items.map(item => { 
                                            const key = item.id
                                            const label = item.label
                                            const subMenus = item.childItems.edges
                                            const order = item.order
                                            const title = item.title
                                            const target = item.target
                                            const url = item.url
                                            if (subMenus.length > 0) { 
                                                return <SplitButton key={key} href={url} target={target ?? "_self"} title={label} id="navbarScrollingDropdown" className={styles.navDropdown}>
                                                   {subMenus.map(subMenu => {
                                                        const subMenuItemNode = subMenu.node
                                                        const subMenuItemKey = subMenuItemNode.id
                                                        const subMenuItemLabel = subMenuItemNode.label
                                                        const subMenuOrder = subMenuItemNode.order
                                                        const subMenuItemTitle = subMenuItemNode.title
                                                        const subMenuItemTarget = subMenuItemNode.target
                                                        const subMenuItemUrl = subMenuItemNode.url
                                                        return <NavDropdown.Item key={subMenuItemKey} className={styles.dropdownItem} href={subMenuItemUrl} target={subMenuItemTarget ?? "_self"} title={subMenuItemTitle}>{subMenuItemLabel}</NavDropdown.Item>
                                                    })}
                                                </SplitButton>
                                            } else { 
                                                return <Nav.Link key={key} href={url} className={styles.navLink} target={target ?? "_self"} title={title}>{label}</Nav.Link>
                                            }
                                        })
                                    }
                                })}
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="primary">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>      
         </Navbar>
    </header>;
};

export default Header;
