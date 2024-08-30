"use client";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "./app.css";

const TinTucPage = () => {
  return (
    <div>
      {/* Setup Carousel */}
      <div className="carousel-container">
        <Carousel controls={true} indicators={true} className="h-100">
          <Carousel.Item className="h-100">
            <div className="overlay"></div>
            <img
              className="d-block w-100 h-100"
              style={{
                objectFit: "cover",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              src="/images/backgroud/seminar.jpg"
              alt="tuyen thanh vien"
            />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <div className="overlay"></div>
            <img
              className="d-block w-100 h-100"
              style={{
                objectFit: "cover",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              src="/images/backgroud/tuyenthanhvien.png"
              alt="tuyen thanh vien"
            />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <div className="overlay"></div>
            <img
              className="d-block w-100 h-100"
              style={{
                objectFit: "cover",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              src="/images/backgroud/member.png"
              alt="tuyen thanh vien"
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="carousel-caption z-1 text-center-image">
          Tin tức và thông báo
        </h1>
      </div>

      {/* Các bài viết */}
      <div className="mt-5">
        <Container>
          <Row>
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", height: "3px" }}
              className="mb-4"
            ></div>
            <Col xs={2}>
              <Row style={{ fontSize: "70px" }} className="fw-bold">
                13
              </Row>
              <Row>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    height: "3px",
                    width: "75%",
                  }}
                ></div>
              </Row>
              <Row className="fs-1">tháng 7</Row>
            </Col>
            <Col xs={5}>
              <Image
                className="imagePost-radius"
                src="/images/posts/huan-luyen-k47/3.png"
                alt="Picture of the author"
                width={500}
                height={500}
              ></Image>
            </Col>
            <Col xs={5} className="d-flex flex-column justify-content-center">
              <Row>
                <p
                  className="fw-bold text-center truncate-line-3"
                  style={{ fontSize: "40px" }}
                >
                  Sinh nhật 1 tuổi của CLB Hỗ trợ Lập Trình
                </p>
              </Row>
              <Row>
                <p className="truncate-line-4 mt-3">
                  🎉 𝐒𝐢𝐧𝐡 𝐧𝐡𝐚̣̂𝐭 𝟏 𝐭𝐮𝐨̂̉𝐢 𝐂𝐋𝐁 𝐇𝐨̂̃ 𝐭𝐫𝐨̛̣ 𝐋𝐚̣̂𝐩 𝐭𝐫𝐢̀𝐧𝐡 🎂 ✨ Hôm nay đánh
                  dấu cột mốc tròn 1 năm CLB Hỗ trợ Lập trình chính thức đi vào
                  hoạt động. 🌈 Một năm vừa qua là một hành trình đầy ấn tượng
                  đối với CLB. Từ những ngày đầu thành lập, sự nhiệt huyết của
                  thế hệ Ban Chủ nhiệm đầu tiên cùng các thành viên đã biến CLB
                  thành một ngôi nhà chung của những người đam mê lập trình, một
                  nơi hội tụ tri thức, năng động, sáng tạo, cùng nhau phát triển
                  và đạt được nhiều thành tựu đáng tự hào. 💐 Để có được cột mốc
                  này, CLB Hỗ trợ Lập trình xin được bày tỏ lòng biết ơn sâu sắc
                  đến sự quan tâm, hỗ trợ và tin tưởng của Nhà trường, Đoàn
                  Thanh niên, Hội Sinh viên và quý Thầy Cô khoa Công nghệ thông
                  tin đã luôn đồng hành và định hướng để CLB ngày càng phát
                  triển. 🔥 Một hành trình mới đang mở ra. Chúc cho các thế hệ
                  hiện tại và tương lai của CLB Hỗ trợ Lập trình luôn giữ vững
                  nhiệt huyết, đam mê, không ngừng học hỏi và đóng góp để tiếp
                  tục đưa CLB tiến xa hơn nữa. Hy vọng rằng những điều tốt đẹp
                  nhất sẽ đến với CLB của chúng ta. 🎂 | 19/08/2023 - 19/08/2024
                  | 🎂
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TinTucPage;
