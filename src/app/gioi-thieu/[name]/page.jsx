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
          </Col>
          <Col lg={5}>b</Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoMemberPage;
