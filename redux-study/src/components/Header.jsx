import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

//
const Header = (props) => {
  const { location } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto" activeKey={location.pathname}>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
      </Nav>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
