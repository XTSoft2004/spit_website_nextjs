// src/app/page.js
"use client";

import { Container, Carousel, Row, Col, Accordion, Card } from "react-bootstrap";
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
      question: "Học ngành khác có thể vào clb không?",
      answer: "<p>Được, nhưng mà phải đáng ứng đúng với yêu cầu của clb </p>",
    },
    {
      question: "Vào câu lạc bộ có được tranning, hay dạy thêm gì không?",
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
        <a className="text-center-image-1 carousel-caption z-2">SPIT</a>
        <a className="text-center-image-2 carousel-caption z-2">here to FIX</a>
        <Carousel controls={true} indicators={true} className="h-100">
          <Carousel.Item className="h-100">
            <div className="overlay"></div>
            <img className="d-block" style={{ width: '100%', height: '700px', objectFit: 'cover', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }} src="\images\background\backgroudSeminar.jpg" alt="seminar" />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <div className="overlay"></div>
            <img className="d-block" style={{ width: '100%', height: '700px', objectFit: 'cover', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }} src="\images\background\backgroud_member.png" alt="member" />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <div className="overlay"></div>
            <img className="d-block" style={{ width: '100%', height: '700px', objectFit: 'cover', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }} src="\images\background\tuyenthanhvien.png" alt="tuyen thanh vien" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="sec-2" className="mt-4">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2 className="mb-4 mt-4 text-center" style={{ color: '#03045E', fontSize: '24px' }}><b>GIỚI THIỆU</b></h2>
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
              <Button className="mt-4 mb-4 button-34 mx-auto d-block">Tìm hiểu thêm</Button>
            </Col>
            <Col xs={12} md={6}>
              <div className="pic">
                <img className="d-block" style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="\images\background\sec2.jpg" alt="sec2" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sec-4">
        <Container>
          <h1 className="mb-4 text-center" style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>CÁC HOẠT ĐỘNG CHÍNH CỦA CLB</h1>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="flip-card mt-4 me-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="\images\background\sec2.jpg" alt="sec2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="flip-card-back" style={{ color: '#03045E' }}>
                  <h1>SEMINAR</h1>
                  <div className="content-card">
                    <p>Thông tin về các buổi seminar sẽ được cập nhật thường xuyên trên trang web của CLB.</p>
                    <p>Các buổi seminar sẽ giới thiệu về các công nghệ mới, các dự án thực tế, và chia sẻ kinh nghiệm từ các chuyên gia trong ngành.</p>
                    <p>Đây là cơ hội tuyệt vời để mở rộng kiến thức và kết nối với cộng đồng lập trình viên.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card mt-4 me-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="\images\background\sec2.jpg" alt="sec2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="flip-card-back" style={{ color: '#03045E' }}>
                  <h1>SEMINAR</h1>
                  <div className="content-card">
                    <p>Thông tin về các buổi seminar sẽ được cập nhật thường xuyên trên trang web của CLB.</p>
                    <p>Các buổi seminar sẽ giới thiệu về các công nghệ mới, các dự án thực tế, và chia sẻ kinh nghiệm từ các chuyên gia trong ngành.</p>
                    <p>Đây là cơ hội tuyệt vời để mở rộng kiến thức và kết nối với cộng đồng lập trình viên.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card mt-4 me-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="\images\background\sec2.jpg" alt="sec2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="flip-card-back" style={{ color: '#03045E' }}>
                  <h1>SEMINAR</h1>
                  <div className="content-card">
                    <p>Thông tin về các buổi seminar sẽ được cập nhật thường xuyên trên trang web của CLB.</p>
                    <p>Các buổi seminar sẽ giới thiệu về các công nghệ mới, các dự án thực tế, và chia sẻ kinh nghiệm từ các chuyên gia trong ngành.</p>
                    <p>Đây là cơ hội tuyệt vời để mở rộng kiến thức và kết nối với cộng đồng lập trình viên.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Row>
            <Col xs={12} md={4}>
              <div className="flip-card mt-4">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="\images\background\sec2.jpg" alt="sec2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="flip-card-back" style={{color: '#03045E'}}>
                    <h1>SEMINAR</h1>
                    <div className="content-card">
                      <p>Thông tin về các buổi seminar sẽ được cập nhật thường xuyên trên trang web của CLB.</p>
                      <p>Các buổi seminar sẽ giới thiệu về các công nghệ mới, các dự án thực tế, và chia sẻ kinh nghiệm từ các chuyên gia trong ngành.</p>
                      <p>Đây là cơ hội tuyệt vời để mở rộng kiến thức và kết nối với cộng đồng lập trình viên.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="flip-card mt-4">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="\images\background\sec2.jpg" alt="sec2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="flip-card-back" style={{color: '#03045E'}}>
                    <h1>HỖ TRỢ</h1>
                    <div className="content-card">
                      <p>Hỗ trợ về mặt kỹ thuật cho các cuộc thi lập trình cấp khoa, cấp trường và hơn thế nữa.</p>
                      <p>Hỗ trợ giảng viên và các bạn sinh viên trong các học phần Nhập môn lập trình và Kỹ thuật lập trình.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="flip-card mt-4">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="\images\background\sec2.jpg" alt="sec2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="flip-card-back" style={{color: '#03045E'}}>
                    <h1>PHÒNG TỰ HỌC</h1>
                    <div className="content-card">
                      <p>Vào các buổi tự học, sẽ có các thành viên CLB trực tại phòng để hướng dẫn, giải đáp thắc mắc về các môn lập trình cho các bạn sinh viên ngoài giờ lên lớp.</p>
                      <p>Thời gian: 14:00 - 17:30 thứ 3 và 14:00 - 16:00 thứ 6 hàng tuần.</p>
                      <p>Địa điểm: Phòng E202 - Lab doanh nghiệp khoa CNTT.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row> */}
          <Button className="mt-4 button-34 mx-auto d-block">Tìm hiểu thêm</Button>
        </Container>
      </div>
      <div id="sec-5">
        <h1 className="mt-4 mb-4 text-center" style={{ color: '#03045E', fontSize: '30px', fontWeight: 'bold' }}>TIN TỨC & THÔNG BÁO</h1>
        <Container>
          <Row>
            <Col md={6} className="d-flex flex-column">
              <Card className="mt-4" style={{ width: '100%', height: '100%', borderRadius: '10px', border: 'none' }}>
                <Card.Img variant="top" src="\images\news\1.jpg" style={{ width: '100%', height: '520px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>Đội thi HUSC_Newbie đạt Huy chương Bạc bảng Warrior tại cuộc thi lập trình Da Nang Code League 2024</Card.Title>
                  <Card.Text className="desText">13/07/2024 - Admin</Card.Text>
                  <Card.Text>
                    Vượt qua hơn 1500 thí sinh và hơn 500 đội thi đấu tại
                    vòng bảng cuộc thi Da Nang Code League năm nay, đội
                    HUSC_Newbie đã xuất sắc ghi tên mình vào danh sách 96
                    thí sinh xuất sắc nhất để thi đấu tại vòng Chung kết diễn
                    ra tại FPT Software Đà Nẵng vào ngày 13/7/2024 vừa qua.
                  </Card.Text>
                  <Button variant="primary" className="mt-4">Xem chi tiết</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Card className="mt-4" style={{ width: '100%', borderRadius: '10px', border: 'none' }}>
                    <Card.Img variant="top" src="\images\news\1.jpg" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>Nhìn lại buổi Seminar “Knowledge, Skills and Applications”</Card.Title>
                      <Card.Text className="desText">23/03/2024 - Admin</Card.Text>
                      <Card.Text>
                        Chiều ngày 23/03 vừa qua, buổi seminar “Knowledge,
                        Skills and Applications” do CLB Hỗ trợ Lập trình tổ chức
                        đã diễn ra thành công tốt đẹp.

                        Buổi seminar đã trình bày hai chủ đề có ý nghĩa với các
                        bạn sinh viên CNTT, đồng thời trao giải cho các sinh viên
                        đạt thứ hạng cao tại contest SPIT Expert lần thứ nhất.
                      </Card.Text>
                      <Button variant="primary" className="mt-4">Xem chi tiết</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="mt-4" style={{ width: '100%', borderRadius: '10px', border: 'none' }}>
                    <Card.Img variant="top" src="\images\news\1.jpg" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>SPIT chúc mừng Ngày Quốc tế phụ nữ 08/03</Card.Title>
                      <Card.Text className="desText">08/02/2024 - Admin</Card.Text>
                      <Card.Text>
                        Nhân dịp kỷ niệm 110 năm ngày Quốc tế Phụ nữ 08/03,
                        CLB Hỗ trợ Lập trình xin gửi lời chúc sức khỏe, hạnh phúc
                        và thành công tới tất cả các chị em phụ nữ, các bạn nữ sinh
                        viên trường Đại học Khoa học Huế.
                      </Card.Text>
                      <Button variant="primary" className="mt-4">Xem chi tiết</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="sec-6" className="faq mt-4">
        <Container>
          <h1 className="mt-4 mb-4 text-center" style={{ fontWeight: 'bold', fontSize: '24px', color: '#fff' }}>Các câu hỏi thường gặp</h1>
          <Accordion className="w-75 mx-auto">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header style={{ fontWeight: 'bold' }}>{faq.question}</Accordion.Header>
                <Accordion.Body dangerouslySetInnerHTML={{ __html: faq.answer }}></Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </div>
    </>
  );
}
