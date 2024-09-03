"use client";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../app.css";
import Image from "next/image";

import InfoMembers from "../../../data/Members/dataMembers.json";
const InfoMemberPage = ({ params }) => {
  const [member, setMember] = useState({});
  useEffect(() => {
    const newMember = InfoMembers.find((member) => member.id === params.name);

    if (newMember) {
      setMember(newMember);
    } else {
      setMember(null);
    }
  }, [params.name]);

  return (
    <>
      {member ? (
        <Container className="py-5">
          <h1 className="text-center fs-3 mb-2 text-2xl font-bold text-uppercase">
            Thông tin thành viên
          </h1>
          <div
            style={{ borderBottom: "3px solid #000", width: "15%" }}
            className="mx-auto mb-5"
          ></div>
          <Row>
            <Col lg={3} className="mx-auto">
              <img
                className="rounded"
                src={member.image}
                alt={`Avatar ${member.first_name} ${member.last_name}`}
                style={{
                  width: "100%",
                  height: 350,
                  objectFit: "cover",
                }}
              ></img>
              <h1 className="text-center mb-2 mt-3 text-2xl font-bold">
                {member.first_name} {member.last_name}
              </h1>
            </Col>

            <Col className="infoMember">
              <Row className="item-thongtin">
                <Col lg={5}>
                  <Row
                    className="item-title py-2 px-2 rounded-lg fw-bold mb-3"
                    style={{
                      backgroundColor: "#003056",
                      color: "white",
                    }}
                  >
                    <p className="text-center">Thông tin</p>
                  </Row>

                  <div className="fs-5 item-info">
                    <span className="fw-bold">Họ và tên: </span>
                    {member.first_name} {member.last_name}
                    <br />
                    <span className="fw-bold">Giới tính: </span> {member.gender}
                    <br />
                    <span className="fw-bold">Ngày sinh: </span>
                    {member.birth_date}
                    <br />
                    <span className="fw-bold">Lớp: </span> {member.class}
                    <br />
                    <span className="fw-bold">Thế hệ: </span>
                    {member.generation}
                  </div>

                  <Row className="ms-2 mt-5">
                    <Row
                      className="item-title py-2 px-2 rounded-lg fw-bold mb-3"
                      style={{
                        backgroundColor: "#003056",
                        color: "white",
                      }}
                    >
                      <p className="text-center">Quá trình hoạt động</p>
                    </Row>
                    <Row>
                      {InfoMembers.filter((member) =>
                        member.id === params.name ? member : null
                      ).map((member, index) => {
                        return (
                          <>
                            <MemberPositions
                              positions={member.position}
                            ></MemberPositions>
                          </>
                        );
                      })}
                    </Row>
                  </Row>
                </Col>
                <Col lg={5} className="item-thanhtich">
                  <Row
                    className="item-title py-2 px-2 rounded-lg fw-bold mb-3"
                    style={{
                      backgroundColor: "#003056",
                      color: "white",
                    }}
                  >
                    <p className="text-center">Thành tích</p>
                  </Row>
                  <Row>
                    {/* Theo từng năm */}
                    {InfoMembers.filter((member) =>
                      member.id === params.name ? member : null
                    ).map((member, index) => {
                      return (
                        <>
                          {member.achievements.length === 0 ? (
                            <>
                              <p className="mx-auto font-bold">
                                Chưa có thành tích
                              </p>
                            </>
                          ) : (
                            <>
                              {member.achievements.map((achievement, index) => {
                                return (
                                  <>
                                    <span className="fs-5 fw-bold my-1">
                                      Năm {achievement.year}:
                                    </span>
                                    <br />
                                    {achievement.names.map((name, index) => {
                                      return (
                                        <>
                                          <div className="ms-4">
                                            <p>
                                              <i className="bi bi-dot"></i>
                                              {name}
                                            </p>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </>
                                );
                              })}
                            </>
                          )}
                        </>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <p className="text-center font-bold">Thành viên không tồn tại</p>
      )}
    </>
  );
};
const MemberPositions = ({ positions = [] }) => {
  // Tạo một đối tượng để lưu các vị   trí theo từng năm
  const positionsByYear = {};

  positions.forEach((position) => {
    const { year, name, description } = position;
    if (!positionsByYear[year]) {
      positionsByYear[year] = [];
    }
    positionsByYear[year].push(`${name} ${description}`);
  });

  return (
    <div>
      {Object.keys(positionsByYear).map((year) => (
        <div key={year}>
          <p className="fs-5 fw-bold my-1">Năm {year}:</p>
          <ul>
            {positionsByYear[year].map((positionName, index) => (
              <li className="ms-4" key={index}>
                <i className="bi bi-dot"></i>
                {positionName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default InfoMemberPage;
