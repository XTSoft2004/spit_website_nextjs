"use client";

import { Row, Col, Container } from "react-bootstrap";
import "../app.css";
import Image from "next/image";
const InfoMemberPage = ({ params }) => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={3} className="mx-auto">
            <Row>
              {/* <img
                style={{ width: 300, height: 400 }}
                src="/images/members/Trần Xuân Trường.webp"
                alt="Avatar Member"
              /> */}
              <Image
                src="/images/members/Trần Xuân Trường.webp"
                alt="Avatar Member"
                width={300}
                height={400}
              ></Image>
              <p className="mt-2 fs-4 fw-bold text-center">Trần Xuân Trường</p>
            </Row>
          </Col>
          <Col lg={4}>
            <div
              id="noibo"
              className="name-posts text-center pt-2 pb-2 imagePost-radius fw-bold"
              style={{ backgroundColor: "#003056", color: "white" }}
            >
              Thông tin
            </div>

            <div className="d-flex">
              <div>
                <i className="bi bi-person-fill fs-2"></i>
              </div>
              <div className="ms-3 mt-2 fs-5">
                <span className="fw-bold">Họ và tên:</span> Trần Xuân Trường
                <br />
                <span className="fw-bold">Giới tính:</span> Nam
                <br />
                <span className="fw-bold">Ngày sinh:</span> 22/12/2004
                <br />
                <span className="fw-bold">Lớp:</span> K46B
                <br />
                <span className="fw-bold">Thế hệ:</span> 1
              </div>
            </div>
          </Col>
          <Col lg={5}>
            {" "}
            <div
              id="noibo"
              className="name-posts text-center pt-2 pb-2 imagePost-radius fw-bold"
              style={{ backgroundColor: "#003056", color: "white" }}
            >
              Quá trình hoạt động
            </div>
            <div className="d-flex">
              <div>
                {/* Icon */}
                <i className="bi bi-server fs-2"></i>
              </div>
              <div className="ms-3 mt-2 fs-5">
                {/* Theo từng năm */}
                <span className="fw-bold">2023:</span>
                <br />
                <div className="ms-4">
                  <p>
                    <i class="bi bi-dot"></i>Tham gia CLB Hỗ trợ Lập trình
                  </p>
                  <p>
                    <i class="bi bi-dot"></i>Tham gia ban chuyên môn
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoMemberPage;