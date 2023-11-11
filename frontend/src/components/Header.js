import {
  Badge,
  Container,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import SearchBox from "./SearchBox";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>
              <img
                src={logo}
                style={{ width: 40, height: 40, marginRight: 10 }}
                alt="WaterBuddy"
              />
              WaterBuddy
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <SearchBox />
              <LinkContainer to="/cart">
                <NavLink>
                  <FaShoppingCart /> Cart
                  <Badge
                    pill
                    bg="success"
                    style={{ marginLeft: "5px" }}
                  ></Badge>
                </NavLink>
              </LinkContainer>
              <NavDropdown title="" id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick="">Logout</NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/login">
                <NavLink>
                  <FaUser /> Sign In
                </NavLink>
              </LinkContainer>
              <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
