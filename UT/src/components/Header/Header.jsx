import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

//
const Header = (props) => {
  const { location } = props;
  
  return (
    <Navbar bg="dark" variant="dark" data-testid="navbar">
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto" activeKey={location.pathname} defaultActiveKey="/">
        <Nav.Link as={Link} to="/" data-testid="home-link">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/products" data-testid="products-link">
          Products
        </Nav.Link>
        <Nav.Link as={Link} to="/reports" data-testid="reports-link">
          Reposts
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
