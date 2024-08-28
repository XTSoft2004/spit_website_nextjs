// src/components/Navbar.js
"use client"; // Chỉ thị này yêu cầu render phía client

import {
  Nav,
  Container,
  Navbar,
  Button,
  Offcanvas,
  NavDropdown,
  Row,
  Dropdown,
} from "react-bootstrap";

import { useEffect, useState } from "react";

import "./app.css";
const index = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nav, setnav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setnav(true);
      } else {
        setnav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`w-100 ${nav ? "aninav" : "aninav1"} sticky-top`}
        style={{
          // background: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="\images\logo\logo-500x500.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-none d-lg-flex justify-content-between w-100 align-items-center">
              <Nav className="mx-auto">
                <>
                  <div className="dropup-center dropup">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Centered dropup
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Action two
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Action three
                        </a>
                      </li>
                    </ul>
                  </div>
                </>

                <Nav.Link className="ms-3" href="#link">
                  Hoạt động
                </Nav.Link>
                <Nav.Link className="ms-3" href="#link">
                  Tin tức
                </Nav.Link>
                <Nav.Link className="ms-3" href="#link">
                  Thông báo
                </Nav.Link>
                <Nav.Link className="ms-3" href="#link">
                  Hoạt động
                </Nav.Link>
              </Nav>
              <Button className="button-34">Tham gia ngay</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fw-bold text-center">
          <></>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default index;
