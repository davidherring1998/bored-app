import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const styles = {
  name: {
    fontSize: "1rem",
    color: "#d9534f",
  },
  tab: {
    paddingLeft: "5%",
  },
  bar: {
    height: '65px'
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" style={styles.bar}>
        <Container>
          <Navbar.Brand href="#" style={styles.name}>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              style={styles.tab}
              href="#Home"
              onClick={() => handlePageChange("News")}
              className={
                currentPage === "News" ? "nav-link active" : "nav-link"
              }
            >
              News
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange("Pictures")}
              className={
                currentPage === "Pictures" ? "nav-link active" : "nav-link"
              }
            >
              Pictures
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange("Random")}
              className={
                currentPage === "Random" ? "nav-link active" : "nav-link"
              }
            >
              Random
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavTabs;