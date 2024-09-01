// src/app/page.js
"use client";

import { Container, Carousel, Row, Col, Accordion, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "CLB Hỗ trợ Lập trình - SPIT";
  }, []);

  const [faqs, setFaqs] = useState([
    {
      question: "Hình thức tuyển thành viên CLB?",
      answer:
        `<p>Quá trình tuyển thành viên CLB Hỗ trợ Lập trình sẽ có 2 vòng: vòng điền form và vòng phỏng vấn. Thông tin chi tiết về từng vòng sẽ được đăng tải trên fanpage của CLB, bạn vui lòng theo dõi để nhận được những thông tin cần thiết nhé.</p>`,
    },
    {
      question: "Nhận quyền lợi gì khi tham gia clb?",
      answer: `<p>Khi tham gia CLB bạn sẽ được:</p>
              <ul>
                <li> - Tham gia các cuộc thi lập trình của CLB, của khoa và nhiều cuộc thi lớn khác.</li>
                <li> - Gặp gỡ và giao lưu với những thành viên có bề dày thành tích khủng.</li>
                <li> - Được đề nghị khen thưởng khi có thành tích xuất sắc.</li>
                <li> - Đặc biệt, thông qua hoạt động trợ giảng cho hai học phần Nhập môn lập trình, Kỹ thuật lập trình, bạn sẽ được nhận kinh phí hỗ trợ tương ứng với từng tiết học.</li>
              </ul>`,
    },
    {
      question: "Học trường khác có thể tham gia CLB không?",
      answer:
        `<p>Rất tiếc, hiện tại CLB Hỗ trợ Lập trình chỉ tuyển các bạn sinh viên trong Trường Đại học Khoa học, Đại học Huế :(.</p>`,
    },
    {
      question: " Nếu chưa có kiến thức về lập trình có thể tham gia CLB không?",
      answer: `<p>Vì CLB hoạt động chính trên cơ sở các thành viên của CLB sẽ hỗ trợ các bạn sinh viên trong 2 học phần Nhập môn lập trình và Kỹ thuật lập trình, nên bạn sẽ cần có một nền tảng kiến thức nhất định về lập trình để có thể tham gia CLB nhé. </p>`,
    },
    {
      question: "Thời gian sinh hoạt của CLB là khi nào?",
      answer: `<p>CLB sinh hoạt vào 16h00 thứ 6 hàng tuần (trong các học kỳ chính, trừ các ngày đặc biệt và các tuần thi kết thúc học phần) tại phòng E202.</p>`,
    },
    {
      question: " Làm thế nào để nhận được sự hỗ trợ về các bài tập lập trình khi không thể đến phòng tự học?",
      answer:
        `<p>Bạn có thể gửi câu hỏi qua fanpage của CLB để nhận được phản hồi từ đội ngũ thành viên nhé. </p>`,
    },
    {
      question: "Làm thế nào để liên hệ với CLB?",
      answer:
        `<p> Bạn có thể liên hệ với CLB qua các phương thức sau: </p>
        <ul>
            <li> - Fanpage: https://facebook.com/clbhtlt.ithusc</li>
            <li> - Email: clbhtlt.ithusc@gmail.com</li>
            <li> - Hotline: 070 229 1317 - 0934 766 830 - 0934 094 936</li>
        </ul>`,
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
                <Accordion.Body className="mx-1" dangerouslySetInnerHTML={{ __html: faq.answer }}></Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </div>
    </>
  );
}
