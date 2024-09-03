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
        // className={`w-100 ${nav ? "aninav" : "aninav1"} sticky-top`}
        className={`w-100 sticky-top`}
        style={{
          // color: "#fff",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex justify-content-center">
            <img
              src="\images\logo\logoSPIT.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Navbar.Brand className="d-none d-sm-block ms-2 mt-1 fw-bold">
              CLB Hỗ trợ Lập trình
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-none d-lg-flex justify-content-between w-100 align-items-center">
              <Nav className="mx-auto">
                <Nav.Link className="ms-3 me-2" href="/">
                  <i className="bi bi-house-door-fill"></i>
                </Nav.Link>
                {/* DropDown thông tin giới thiệu */}
                <NavDropdown title="Giới thiệu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/gioi-thieu/#tong-quan">
                    Tổng quan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/gioi-thieu.#muc-tieu">
                    Mục đích hoạt động
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/gioi-thieu/#thanh-vien">
                    Cơ cấu tổ chức
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="ms-3" href="/hoat-dong">
                  Hoạt động
                </Nav.Link>
                <Nav.Link className="ms-3" href="/tin-tuc">
                  Tin tức - Thông báo
                </Nav.Link>
                <Nav.Link className="ms-3" href="/tuyen-thanh-vien">
                  Tuyển thành viên
                </Nav.Link>
              </Nav>
              {/* <Button className="button-34">Tham gia ngay</Button> */}
              <a href='/tuyen-thanh-vien#reg-form'>
                <button className="button">
                  Tham gia ngay
                  <div className="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fw-bold text-center">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>

                <NavDropdown title="Giới thiệu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Tổng quan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Mục tiêu
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Thành viên
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default index;
