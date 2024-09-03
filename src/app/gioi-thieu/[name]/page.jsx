"use client";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../app.css";
import Image from "next/image";

import InfoMembers from "../../../data/Members/dataMembers.json";
const InfoMemberPage = ({ params }) => {
  const [member, setMember] = useState({});
  useEffect(() => {
    const newMember = InfoMembers.find(
      (member) => member.id === params.name
    );

    if (newMember) {
      setMember(newMember);
    } else {
      setMember(null);
    }
  }, [params.name]);

  return (
    <>
      {member ? (
        <Container className="mt-5">
          <Row>
            <h1 className="text-center mb-4 text-4xl font-bold">{member.first_name} {member.last_name}</h1>
            <Col lg={3} className="mx-auto">
              <Row>
                <Image
                  src={`/images/members/${member.first_name} ${member.last_name}.webp`}
                  alt={`Avatar ${member.first_name} ${member.last_name}`}
                  width={300}
                  height={400}
                  style={{ borderRadius: "25px" }}
                ></Image>
              </Row>
            </Col>
            <Col lg={4}>
              <div
                id="noibo"
                className="name-posts text-center pt-2 pb-2 fw-bold"
                style={{ backgroundColor: "#003056", color: "white" }}
              >
                Thông tin
              </div>

              <div className="d-flex">
                <div>
                  <i className="bi bi-person-fill fs-2"></i>
                </div>
                <div className="ms-3 mt-2 fs-5">
                  <span className="fw-bold">Họ và tên:</span> {member.first_name} {member.last_name}
                  <br />
                  <span className="fw-bold">Giới tính:</span> {member.gender}
                  <br />
                  <span className="fw-bold">Ngày sinh:</span> {member.birth_date}
                  <br />
                  <span className="fw-bold">Lớp:</span> {member.class}
                  <br />
                  <span className="fw-bold">Thế hệ:</span> {member.generation}
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
      ) : (
        <p className="text-center font-bold">Thành viên không tồn tại</p>
      )}
    </>
  );
};

export default InfoMemberPage;
