// src/app/page.js
"use client";

import { Container, Carousel, Row, Col, Accordion, Card } from "react-bootstrap";
import CarouselItems from "../components/Carousel/carouselItems";
import FlipCard from "../components/FlipCard/flipCard";
import CarouselCard from "../components/CarouselCard/carouselCard";
import Button from "react-bootstrap/Button";
import faqs from "../data/Home/dataFaqs.json";
import dataFlipCards from '../data/Home/dataFlipCards.json';
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "CLB Hỗ trợ Lập trình - SPIT";
  }, []);

  const srcImage = ["/images/background/backgroudSeminar.jpg", "/images/background/backgroud_member.png", "/images/background/tuyenthanhvien.png"];

  return (
    <>
      <div id="sec-1" className="w-100">
        <a className="text-center-image-1 carousel-caption z-2">SPIT</a>
        <a className="text-center-image-2 carousel-caption z-2">here to FIX</a>
        <CarouselItems srcImage={srcImage}></CarouselItems>
      </div>
      <div id="sec-2" className="mt-4 mb-4">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2 className="mb-4 mt-4 text-center" style={{ color: '#03045E', fontSize: '40px' }}><b>GIỚI THIỆU</b></h2>
              <div className="content w-75">
                <p className="mb-4"><b>CLB Hỗ trợ Lập trình</b> (Support
                  Programming Information Technology, tên
                  viết tắt là SPIT) Trường Đại học Khoa học
                  Huế, được thành lập vào ngày 19/08/2023. </p>
                <p className="mb-4">CLB được thành lập với mục đích hỗ trợ
                  sinh viên học lập trình, tạo môi trường giao
                  lưu trao đổi kinh nghiệm học tập, nghiên
                  cứu, tiếp cận các chủ đề công nghệ mới.</p>
                <p className="mb-4"><b>Slogan của CLB:</b> “SPIT here to fix”</p>
              </div>
              <a href="/gioi-thieu">
                <Button className="mt-4 mb-4 button-34 mx-auto d-block">Tìm hiểu thêm</Button>
              </a>
            </Col>
            <Col xs={12} md={6}>
              <div className="pic">
                <img className="d-block" style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="\images\background\sec2.jpg" alt="sec2" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sec-3">
        <h1 className="mt-4 mb-4 text-center" style={{ color: '#fff', fontSize: '40px', fontWeight: 'bold' }}>THÀNH TÍCH NỔI BẬT CỦA CLB</h1>
        <CarouselCard></CarouselCard>
      </div>
      <div id="sec-4">
        <Container>
          <h1 className="mb-4 text-center" style={{ color: '#03045E', fontSize: '40px', fontWeight: 'bold' }}>CÁC HOẠT ĐỘNG CHÍNH CỦA CLB</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {dataFlipCards.map((flipCard, index) => (
              <FlipCard key={index} title={flipCard.title} srcImage={flipCard.srcImage}></FlipCard>
            ))}
          </div>
          <a href="/hoat-dong">
            <Button className="mt-4 button-34 mx-auto d-block">Tìm hiểu thêm</Button>
          </a>
        </Container>
      </div>
      <div id="sec-5">
        <h1 className="mt-4 mb-4 text-center" style={{ color: '#fff', fontSize: '40px', fontWeight: 'bold' }}>TIN TỨC & THÔNG BÁO</h1>
        <Container>
          <Row>
            <Col md={6} className="d-flex flex-column">
              <Card style={{ width: '100%', height: '100%', borderRadius: '10px', border: 'none' }}>
                <Card.Img variant="top" src="\posts\gioi-thieu-clb-ho-tro-lap-trinh\images\1.jpg" style={{ width: '100%', height: '700px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>CLB Hỗ trợ Lập trình - “SPIT here to fix”</Card.Title>
                  <Card.Text className="desText">Ngày 23 tháng 8 năm 2024 - Nguyễn Văn A</Card.Text>
                  <Card.Text>
                    💫CLB Hỗ trợ Lập trình (Support Programming Information Technology - SPIT) được thành lập vào ngày
                    19/08/2023,
                    dưới sự chỉ đạo của Hội Sinh viên trường và ban cố vấn thuộc Khoa Công nghệ thông tin, Trường Đại học Khoa
                    học, Đại học Huế.
                  </Card.Text>
                  <a href="/gioi-thieu-clb-ho-tro-lap-trinh">
                    <Button variant="primary" className="mt-4">Xem chi tiết</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Row className="mb-3">
                <Col>
                  <Card style={{ width: '100%', borderRadius: '10px', border: 'none' }}>
                    <Card.Img variant="top" src="\posts\da-nang-code-league-2024\images\1.jpg" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>Chúc mừng đội thi HUSC_Newbie đạt Huy chương Bạc (bảng Warrior) tại cuộc thi lập trình Da Nang Code League năm 2024</Card.Title>
                      <Card.Text className="desText">Ngày 14 tháng 7 năm 2024 - Nguyễn Văn A</Card.Text>
                      <Card.Text>
                        Vượt qua hơn 1500 thí sinh và hơn 500 đội thi đấu tại vòng bảng cuộc thi Code League, đội HUSC_Newbie đã
                        xuất sắc ghi tên mình vào danh sách 96 thí sinh xuất sắc nhất để thi đấu tại vòng Chung kết diễn ra tại FPT
                        Software Đà Nẵng vào ngày 13/7/2024 vừa qua.
                      </Card.Text>
                      <a href="/tin-tuc/da-nang-code-league-2024">
                        <Button variant="primary" className="mt-4">Xem chi tiết</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card style={{ width: '100%', borderRadius: '10px', border: 'none' }}>
                    <Card.Img variant="top" src="\posts\recap-picnic-haiduong-2024\images\1.jpg" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>Buổi ngoại khoá 26/03 của CLB Hỗ trợ Lập trình</Card.Title>
                      <Card.Text className="desText">Ngày 14 tháng 4 năm 2024 - Nguyễn Văn A</Card.Text>
                      <Card.Text>
                        🌊 Ngày 24/03/2024 đã là một ngày picnic đầy ắp niềm vui tại biển Hải Dương, bởi buổi teambuilding do CLB Hỗ
                        trợ Lập trình tổ chức.
                        🌴 Trong buổi teambuilding này, các thành viên CLB đã có cơ hội gần gũi với nhau hơn, cùng chơi các trò chơi
                        có tính đồng đội cao và cùng nhau tạo nên thật nhiều kỷ niệm đáng nhớ.
                      </Card.Text>
                      <a href="/tin-tuc/recap-picnic-haiduong-2024">
                        <Button variant="primary" className="mt-4">Xem chi tiết</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sec-6" className="faq">
        <Container>
          <h1 className="mb-4 text-center" style={{ fontWeight: 'bold', fontSize: '40px', color: '#03045E', textTransform: 'uppercase' }}>Các câu hỏi thường gặp</h1>
          <Accordion className="w-75 mx-auto">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header style={{ fontWeight: 'bold' }}>{faq.question}</Accordion.Header>
                <Accordion.Body className="mx-1" dangerouslySetInnerHTML={{ __html: faq.answer }}></Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </div>
    </>
  );
}
