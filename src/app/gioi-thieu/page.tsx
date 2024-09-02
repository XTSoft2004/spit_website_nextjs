"use client";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { useEffect } from 'react';
import Image from "next/image";
import InfoMember from "@/data/Members/dataMembers.json";
import InfoBoards from "@/data/Members/dataBoards.json";
import CardMember from "@/components/Members/CardMember";
import CardRole from "@/components/Members/CardRole";
import "./app.css";
const GioiThieuPage = () => {
  useEffect(() => {
    document.title = "Giới thiệu - SPIT";
  }, []);
  return (
    <>
      <div id="thanh-vien">
        <Container className="item-board">
          {InfoBoards.map((board, index) => {
            // Calculate the number of members for the current board
            const memberCount = InfoMember.filter((member) =>
              member.position.some(
                (position) =>
                  typeof position === "object" && position.id === board.id
              )
            ).length;

            return (
              <div key={index} className="d-flex flex-column flex-lg-row mt-5">
                <Col xs={12} lg={4}>
                  {/* Tạo thẻ board */}
                  <CardRole
                    namerole={board.name}
                    description={board.description}
                    number={memberCount.toString().padStart(2, "0")} // Pass the calculated member count here
                  />
                </Col>

                <Row xs={12} lg={8} className="gap-3">
                  {/* Tạo info các member */}
                  {InfoMember.filter((member) =>
                    member.position.some(
                      (position) =>
                        typeof position === "object" && position.id === board.id
                    )
                  ).map((member, index) => (
                    <Col key={index} className="item-card">
                      <CardMember
                        first_name={member.first_name}
                        last_name={member.last_name}
                        position={`${member.position.filter(
                          (position) =>
                            typeof position === "object" &&
                            position.id === board.id
                        )[0].year
                          }: ${member.position.filter(
                            (position) =>
                              typeof position === "object" &&
                              position.id === board.id
                          )[0].name
                          }`}
                        image={member.image}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
};

export default GioiThieuPage;
