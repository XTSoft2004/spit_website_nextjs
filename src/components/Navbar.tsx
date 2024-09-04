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
import { usePathname } from 'next/navigation'

import "./app.css";
import Link from "next/link";
const Index = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nav, setnav] = useState(false);

  const pathname = usePathname(); // Call usePathname at the top level

  useEffect(() => {
    setUrl(pathname);
    // console.log(pathname); // Log the current pathname

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
  }, [pathname]);


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
            <Navbar.Brand className="d-none d-sm-block ms-2 mt-1 fw-bold gradient-text">
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
                <Nav.Link className="ms-3 me-2 navbar-item" href="/">
                  <i className="bi bi-house-door-fill gradient-text"></i>
                </Nav.Link>
                {/* DropDown thông tin giới thiệu */}
                <NavDropdown className={`gradient-text fw-bold navbar-item ${url.includes("/gioi-thieu/") ? "active" : null}`} title="Giới thiệu" id="basic-nav-dropdown">
                  <NavDropdown.Item className={`gradient-text fw-bold navbar-item ${url == "/gioi-thieu/#tong-quan" ? "active" : null}`} >
                    <Link href="/gioi-thieu/#tong-quan">Tổng quan</Link>
                    {/* TODO: Thêm nhiều thằng link cho tao */}
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`gradient-text fw-bold navbar-item ${url == "/gioi-thieu/#muc-tieu" ? "active" : null}`} href="/gioi-thieu/#muc-tieu">
                    Mục đích hoạt động
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`gradient-text fw-bold navbar-item ${url == "/gioi-thieu/#thanh-vien" ? "active" : null}`} href="/gioi-thieu/#thanh-vien">
                    Cơ cấu tổ chức
                  </NavDropdown.Item>
                </NavDropdown>


                <Nav.Link title="Hoạt động" className={`ps-3 gradient-text fw-bold navbar-item ${url == "/hoat-dong" ? "active" : null}`} href="/hoat-dong">
                  Hoạt động
                </Nav.Link>

                <NavDropdown className={`ps-3 gradient-text fw-bold navbar-item ${url.includes("/tin-tuc/") ? "active" : null}`} title="Tin tức - Thông báo" id="basic-nav-dropdown">
                  <NavDropdown.Item className={`gradient-text fw-bold navbar-item ${url == "/tin-tuc" ? "active" : null}`} href="/tin-tuc">
                    Hoạt động
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`gradient-text fw-bold navbar-item ${url == "/tin-tuc/#giai-thuong" ? "active" : null}`} href="/tin-tuc/#giai-thuong">
                    Giải thưởng
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`gradient-text fw-bold navbar-item ${url == "/tin-tuc/#noi-bo" ? "active" : null}`} href="/tin-tuc/#noi-bo">
                    Nội bộ
                  </NavDropdown.Item>
                </NavDropdown>


                <Nav.Link className={`ps-3 gradient-text fw-bold navbar-item ${url == "/tuyen-thanh-vien" ? "active" : null}`} href="/tuyen-thanh-vien">
                  Tuyển thành viên
                </Nav.Link>
              </Nav >
              {/* <Button className="button-34">Tham gia ngay</Button> */}
              < a href='/tuyen-thanh-vien#reg-form' >
                <button className="button">
                  Tham gia ngay
                  <div className="hoverEffect">
                    <div></div>
                  </div>
                </button>
              </ a>
            </Nav >
          </Navbar.Collapse >
        </Container >
      </Navbar >

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title >
            <img
              src="\images\logo\logoSPIT.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center fw-bold">
          <Nav className="d-flex flex-column">
            <Nav.Link className="mt-2 gradient-text fw-bold" href="/">
              Trang chủ
            </Nav.Link>
            <Nav.Link className="mt-2 gradient-text fw-bold" href="/gioi-thieu">
              Giới thiệu
            </Nav.Link>
            <Nav.Link className="mt-2 gradient-text fw-bold" href="/hoat-dong">
              Hoạt động
            </Nav.Link>
            <Nav.Link className="mt-2 gradient-text fw-bold" href="/tin-tuc">
              Tin tức - Thông báo
            </Nav.Link>
            <Nav.Link className="mt-2 gradient-text fw-bold" href="/tuyen-thanh-vien">
              Tuyển thành viên
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
};

export default Index;
