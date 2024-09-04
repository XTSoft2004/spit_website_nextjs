"use client";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import Image from "next/image";
import InfoMember from "@/data/Members/dataMembers.json";
import InfoBoards from "@/data/Members/dataBoards.json";
import CardMember from "@/components/Members/CardMember";
import CardRole from "@/components/Members/CardRole";
import BorderPixel from "@/components/Border/BoderPixel";
import "./app.css";
const GioiThieuPage = () => {
  useEffect(() => {
    document.title = "Giới thiệu - SPIT";
  }, []);
  return (
    <>
      <div id="tong-quan" className="py-5">
        <Container>
          <Row className="d-flex justify-content-lg-between">
            <Col lg={5} className="fs-1 fw-bold">
              <div
                className="ps-5"
                style={{ borderLeft: "10px solid #103994", height: "100%" }}
              >
                <p>Về</p>
                <p className="item-textColor">CLB Hỗ trợ</p>
                <p className="item-textColor">Lập trình</p>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center justify-content-lg-end"
            >
              <Image
                className="logo-tongquan"
                style={{ objectFit: "cover" }}
                src="/images/logo/logoSPIT.png"
                alt="Logo CLB"
                width={200}
                height={200}
              />
            </Col>
          </Row>
          <Row>
            <p className="fs-5 mt-5">
              <span className="fw-bold item-textColor">
                CLB Hỗ trợ Lập trình (Support Programming Information
                Technology, viết tắt SPIT)
              </span>{" "}
              Trường Đại học Khoa học Huế, được thành lập vào ngày 19/8/2023
              dưới sự chỉ đạo của Hội Sinh viên trường và ban cố vấn thuộc Khoa
              Công nghệ thông tin, Trường Đại học Khoa học, Đại học Huế.
              <br />
              <br />
              Với hoạt động chính trên cơ sở đồng hành cùng giảng viên trong các
              buổi thực hành để hướng dẫn sinh viên tiếp cận với kĩ năng và
              phương pháp lập trình cụ thể, các thành viên của CLB là những sinh
              viên có thành tích tốt, được tuyển chọn để hướng dẫn sinh viên năm
              nhất bước đầu làm quen với lập trình. Hiện tại CLB đang hỗ trợ các
              lớp học phần Nhập môn lập trình và Kỹ thuật lập trình của khoa
              Công nghệ thông tin.
              <br />
              <br />
              Bên cạnh các hoạt động học thuật, CLB còn kết nối mentor từ các
              doanh nghiệp để sinh viên có cơ hội tiếp cận sớm với những chủ đề,
              chuyên môn phù hợp, từ đó tạo tiền đề thực tập và làm việc tại các
              doanh nghiệp trong tương lai. Ngoài ra, các chương trình hoạt động
              ngoài trời cũng được tổ chức để gắn kết thành viên và tạo tinh
              thần thoải mái sau các buổi học tập căng thẳng.
            </p>
          </Row>
        </Container>
      </div>

      <div
        id="muc-dich"
        className="text-white"
        style={{ backgroundColor: "#103994" }}
      >
        <Container>
          <Row className="py-5">
            <Row>
              <Col lg={5} className="fs-1 fw-bold">
                <div
                  className="ps-5"
                  style={{ borderLeft: "10px solid #fff", height: "100%" }}
                >
                  <p>Mục đích</p>
                  <p>hoạt động</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col lg={4} className="item-mucdich">
                <Row>
                  <i
                    className="bi bi-code-slash fw-bold w-75"
                    style={{ fontSize: "80px" }}
                  ></i>
                  <div style={{ marginLeft: "2px" }}>
                    <BorderPixel
                      direction="bottom"
                      width={75}
                      pixel={5}
                      color="#fff"
                    ></BorderPixel>
                  </div>
                </Row>
                <Row className="mt-4">
                  <p className="fs-4">
                    Tạo sân chơi học thuật, nghiên cứu, đam mê lập trình và có
                    kinh nghiệm lập trình cho các bạn sinh viên trường Đai học
                    Khoa học, đặc biệt là sinh viên khoa Công nghệ thông tin.
                  </p>
                </Row>
              </Col>
              <Col lg={4} className="item-mucdich">
                <Row>
                  <i
                    className="bi bi-bricks fw-bold w-75"
                    style={{ fontSize: "80px" }}
                  ></i>
                  <div style={{ marginLeft: "2px" }}>
                    <BorderPixel
                      direction="bottom"
                      width={75}
                      pixel={5}
                      color="#fff"
                    ></BorderPixel>
                  </div>
                </Row>
                <Row className="mt-4">
                  <p className="fs-4">
                    Hỗ trợ hoạt động học tập của các bạn sinh viên, phát huy khả
                    năng, góp phần nâng cao chất lượng học tập, tạo môi trường
                    trao đổi, học tập, rèn luyện các kỹ năng ứng dụng trong
                    ngành.
                  </p>
                </Row>
              </Col>
              <Col lg={4} className="item-mucdich">
                <Row>
                  <i
                    className="bi bi-link-45deg fw-bold w-75"
                    style={{ fontSize: "80px" }}
                  ></i>
                  <div style={{ marginLeft: "2px" }}>
                    <BorderPixel
                      direction="bottom"
                      width={75}
                      pixel={5}
                      color="#fff"
                    ></BorderPixel>
                  </div>
                </Row>
                <Row className="mt-4">
                  <p className="fs-4">
                    Trong tương lai, sẽ hướng đến việc hợp tác chặt chẽ với các
                    doanh nghiệp là cầu nối giữa doanh nghiệp với khoa và với
                    sinh viên.
                  </p>
                </Row>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>

      <div id="thanh-vien">
        <Container className="item-board">
          {/* Ban chủ nhiệm */}
          <Row className="py-5 d-flex align-items-center">
            <Col xs={12} lg={4}>
              {/* <BorderPixel direction='left' height={100} pixel={20} color="#103994"></BorderPixel> */}
              <div className="item-cocau ps-5">
                <p className="fs-1 fw-bold item-textColor">Cơ cấu</p>
                <p className="fs-1 fw-bold item-textColor">tổ chức</p>
              </div>
            </Col>
            <Col xs={12} lg={8}>
              <p className="ms-5 fs-5 item-textColor">
                CLB được điều hành bởi ban Chủ nhiệm gồm 01 Chủ nhiệm, 03 Phó
                Chủ nhiệm; 02 ban là ban Chuyên môn, ban Truyền thông và được cố
                vấn bởi giảng viên Khoa Công nghệ thông tin.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="item-bancovan text-center">
              <p className="fs-1 fw-bold item-textColor text-uppercase">
                Ban cố vấn
              </p>
            </Col>
          </Row>

          <Row className="gap-3 mt-5 ms-5">
            {InfoMember.filter((member) =>
              member.position.some(
                (position) =>
                  typeof position === "object" && position.id === "bcv"
              )
            ).map((member, index) => (
              <Col key={index} className="item-card">
                <CardMember
                  id={member.id}
                  first_name={member.first_name}
                  last_name={member.last_name}
                  position={`${member.position.filter(
                    (position) =>
                      typeof position === "object" && position.id === "bcv"
                  )[0].name
                    }`}
                  image={member.image}
                />
              </Col>
            ))}
          </Row>
          <BorderPixel
            direction="bottom"
            width={100}
            pixel={5}
            color="#000"
          ></BorderPixel>

          {InfoBoards.map((board, index) => {
            // Calculate the number of members for the current board
            const memberCount = InfoMember.filter((member) =>
              member.position.some(
                (position) =>
                  typeof position === "object" && position.id === board.id
              )
            ).length;

            return (
              <div
                key={index}>
                <div
                  className="d-flex flex-column flex-lg-row py-5"
                >
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
                          typeof position === "object" &&
                          position.id === board.id
                      )
                    ).map((member, index) => (
                      <Col key={index} className="item-card">
                        <CardMember
                          id={member.id}
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
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
};

export default GioiThieuPage;
