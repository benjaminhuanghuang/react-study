import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import { withRouter } from "react-router";

//
const Header = (props) => {
  const { location } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto" activeKey={location.pathname}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/demos-useState">Demos for useState</Nav.Link>
        <Nav.Link href="/demos-useEffect">Demos for useEffect</Nav.Link>
      </Nav>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
