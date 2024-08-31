// src/app/page.js
"use client";

import {
  Container,
  Carousel,
  Row,
  Col,
  Accordion,
  Card,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { useState } from "react";

export default function Home() {
  const [faqs, setFaqs] = useState([
    {
      question: "Vì sao clb được thành lập?",
      answer:
        "<p>CLB Hỗ trợ Lập trình ra đời với mục đích tạo sân chơi học thuật, nghiên cứu, đam mê lập trình. Hỗ trợ hoạt động học tập của các bạn sinh viên, phát huy khả năng nhằm nâng cao chất lượng học tập, tạo môi trường trao đổi học tập và rèn luyện các kỹ năng ứng dụng trong ngành học.</p>",
    },
    {
      question: "Nhận quyền lợi gì khi tham gia clb?",
      answer: `<p>CLB Hỗ trợ Lập trình là nơi giúp bạn phát triển những điều trên và còn hơn thế nữa 😁, Khi trở thành thành viên của CLB bạn sẽ nhận được 5Đ:</p>
              <ul>
                <li>🔥 Được tham gia các hoạt động chung của CLB (ngoại khóa, trainning, các buổi seminar của khoa CNTT)</li>
                <li>🔥 Được hỗ trợ trong khâu chuyên môn, học thuật bởi quý thầy cô dày dặn kinh nghiệm của khoa Công nghệ thông tin</li>
                <li>🔥 Được hỗ trợ kinh phí theo tiết hỗ trợ thực hành tại phòng máy (Nói rõ khi phỏng vấn)</li>
                <li>🔥 Được giao lưu gặp gỡ các anh chị có thành tích học tập khủng và đạt được các giải thưởng lập trình từ cấp trường cho đến cấp quốc gia và hơn thế nữa </li>
                <li>🔥 Được đề nghị khen thưởng khi có thành tích xuất sắc.</li>
              </ul>`,
    },
    {
      question: "Hình thức tuyển thành viên?",
      answer:
        "<p>Khi tuyển thành viên thí sinh sẽ qua 2 vòng, vòng đầu là làm bài test và vòng thứ 2 là phỏng vấn</p>",
    },
    {
      question: "Học nghành khác có thể vào clb không?",
      answer: "<p>Được, nhưng mà phải đáng ứng đúng với yêu cầu của clb </p>",
    },
    {
      question: "Vào câu lạp bộ có được tranning, hay dạy thêm gì không?",
      answer: "<p>Khi vào clb sẽ được tranning và tham gia các kì thi</p>",
    },
    {
      question: "Nếu chưa có kiến thức có thể tham gia clb không?",
      answer:
        "<p>Yêu cầu bạn phải có kiến thức căn bản vững vàng, còn kiến thức nâng cao có thể học sau</p>",
    },
    {
      question: "Tham gia clb học thuật có hoạt động gì khác không?",
      answer:
        "<p>Khi tham gia clb còn nhiều hoạt động khác ngoài việc hỗ trợ lập trình như: vui chơi, tranning , kì thi,..</p>",
    },
    {
      question: "Có được tham gia nhiều clb không?",
      answer: "<p>Điều đó tuỳ vào các bạn</p>",
    },
  ]);

  return (
    <>
      <div id="sec-1" className="w-100">
        <h1
          className="text-center"
          style={{ fontSize: "40px", font: "montserrat" }}
        >
          SPIT
        </h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              src="\images\backgroud\seminar.jpg"
              alt="seminar"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              src="\images\backgroud\member.png"
              alt="member"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              src="\images\backgroud\tuyenthanhvien.png"
              alt="tuyen thanh vien"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div id="sec-2">
        <Container>
          <Row className="mb-3 mt-3">
            <div className="list-logo justify-content-center d-flex flex-wrap">
              <img
                className="me-2"
                src="\images\logo\logoHUSC.png"
                style={{ width: "50px", height: "50px" }}
                alt="logoHUSC"
              />
              <img
                className="me-2 ms-1"
                src="\images\logo\logoHoiSV.png"
                style={{ width: "50px", height: "50px" }}
                alt="logoHoiSV"
              />
              <img
                className="me-1 ms-2"
                src="\images\logo\logoKhoaCNTT.png"
                style={{ width: "50px", height: "50px" }}
                alt="logoKhoaCNTT"
              />
              <img
                className="ms-2"
                src="\images\logo\logoSPIT.png"
                style={{ width: "50px", height: "50px" }}
                alt="logoSPIT"
              />
            </div>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6}>
              <div className="content w-75">
                <h2
                  className="mb-4 text-center"
                  style={{ color: "#03045E", fontSize: "24px" }}
                >
                  <b>GIỚI THIỆU</b>
                </h2>
                <p className="mb-4">
                  <b>CLB Hỗ trợ Lập trình</b> (Support Programming Information
                  Technology, tên viết tắt là SPIT) Trường Đại học Khoa học Huế,
                  được thành lập vào ngày 19/08/2023.{" "}
                </p>
                <p className="mb-4">
                  CLB được thành lập với mục đích hỗ trợ sinh viên học lập
                  trình, tạo môi trường giao lưu trao đổi kinh nghiệm học tập,
                  nghiên cứu, tiếp cận các chủ đề công nghệ mới.
                </p>
                <p className="mb-4">
                  <b>Slogan của CLB:</b> “SPIT here to fix”
                </p>
                <Button className="mt-4 button-34">Tìm hiểu thêm</Button>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="pic">
                <img
                  className="d-block"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  src="\images\backgroud\sec2.jpg"
                  alt="sec2"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sec-3">
        <Container>
          <h1>THÀNH TÍCH NỔI BẬT</h1>
        </Container>
      </div>
      <div id="sec-4">
        <Container>
          <h1>CÁC HOẠT ĐỘNG CHÍNH CỦA CLB</h1>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="flip-card mt-4">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="\images\sec2.png"
                      alt="sec2"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <h1>Some Text</h1>
                    <p>Description or additional information</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="flip-card mt-4">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="\images\sec2.png"
                      alt="sec2"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <h1>Some Text</h1>
                    <p>Description or additional information</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="flip-card mt-4">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="\images\sec2.png"
                      alt="sec2"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <h1>Some Text</h1>
                    <p>Description or additional information</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sec-5">
        <Container>
          <h1>TIN TỨC & THÔNG BÁO</h1>
        </Container>
      </div>
      <div id="sec-6" className="faq">
        <Container>
          <h1
            className="mt-4 mb-4 text-center"
            style={{ fontWeight: "bold", fontSize: "24px", color: "#03045E" }}
          >
            Các câu hỏi thường gặp
          </h1>
          <Accordion className="w-75 mx-auto">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                eventKey={index.toString()}
                style={{ borderRadius: "10px" }}
              >
                <Accordion.Header style={{ fontWeight: "bold" }}>
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </div>
    </>
  );
}
