// src/app/TuyenThanhVien/page.js
"use client";

import { useState, useEffect } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import RoomIcon from "@mui/icons-material/Room";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Typography } from "@mui/material";

import "./style.css";

export default function TuyenThanhVien() {
  useEffect(() => {
    document.title = "Tuyển Thành Viên - SPIT";
  }, []);

  const [formData, setFormData] = useState({
    hoten: "",
    msv: "",
    ngaysinh: "",
    gioitinh: "",
    email: "",
    sodienthoai: "",
    diachifb: "",
    lop: "",
    diemNMLT: "",
    diemKTLT: "",
    gioithieu: "",
    mongmuon: "",
    hotro: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClear1 = async () => {
    setFormData({
      hoten: "",
      msv: "",
      ngaysinh: "",
      gioitinh: "",
      email: "",
      sodienthoai: "",
      diachifb: "",
      lop: "",
      diemNMLT: formData.diemNMLT,
      diemKTLT: formData.diemKTLT,
      gioithieu: formData.gioithieu,
      mongmuon: formData.mongmuon,
      hotro: formData.hotro,
    });
  };

  const handleClear2 = async () => {
    setFormData({
      hoten: formData.hoten,
      msv: formData.msv,
      ngaysinh: formData.ngaysinh,
      gioitinh: formData.gioitinh,
      email: formData.email,
      sodienthoai: formData.sodienthoai,
      diachifb: formData.diachifb,
      lop: formData.lop,
      diemNMLT: "",
      diemKTLT: "",
      gioithieu: "",
      mongmuon: "",
      hotro: "",
    });
  };

  const handleNext = async () => {
    document.getElementById("form-1")?.classList.add("d-none");
    document.getElementById("form-2")?.classList.remove("d-none");
  };

  const handleBack = async () => {
    document.getElementById("form-2")?.classList.add("d-none");
    document.getElementById("form-1")?.classList.remove("d-none");
  };

  const dateStart = new Date("2024-09-01").getTime();
  const dateNow = new Date(Date.now()).getTime();
  const dateEnd = new Date("2024-09-06").getTime();

  const handleReg = async () => {
    if (dateNow >= dateStart && dateNow <= dateEnd)
      document
        .getElementById("sec-reg-form")
        ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {dateNow >= dateStart && dateNow <= dateEnd ? (
        <>
          <div
            id="sec-1"
            className="position-relative"
            style={{ height: "calc(100vh - 75px)" }}
          >
            <img
              className="w-100 h-100 object-cover"
              src="/images/background/recruitment_intro2.png"
              alt="background"
              style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
            />
            <div
              className="d-flex flex-column justify-content-center align-items-center text-center"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="position-absolute top-0 end-0 d-flex justify-content-end align-items-center"
                style={{ width: "100%", height: "100%" }}
              >
                {/* <div className="me-3">
                  <img
                    style={{ width: 250, height: 250 }}
                    src="/images/logo/logoSPIT.png"
                    alt="logo"
                  />
                </div> */}
              </div>
              <div
                className="item-tuyenthanhvien position-absolute top-0 start-0 d-flex justify-content-start align-items-center"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="w-50">
                  <h1 className="text-white title-banner">Tuyển thành viên</h1>
                  <p
                    className="text-white mb-3 title-date"
                    style={{ textTransform: "uppercase" }}
                  >
                    <b>Thời gian mở đơn:</b> 01/09/2024 - 06/09/2024
                  </p>
                  <a href="#reg-form">
                    <Button
                      style={{
                        width: "200px",
                        height: "50px",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                      }}
                      onClick={handleReg}
                    >
                      <b>ĐĂNG KÝ NGAY</b>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="sec-2" className="py-4">
            <Container className="mb-2">
              <Row className="mb-2">
                <Col>
                  <a
                    style={{
                      fontWeight: "bold",
                      fontSize: "30px",
                      borderTopLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                  >
                    Một số thông tin
                  </a>
                </Col>
              </Row>
              <div
                className="mb-3"
                style={{ width: "20%", borderBottom: "4px solid white" }}
              ></div>
              <Row>
                <Col sm={4}>
                  <a style={{ fontWeight: "bold", fontSize: "24px" }}>
                    Đối tượng tham gia
                  </a>
                </Col>
                <Col sm={8}>
                  <p>
                    Sinh viên năm 1, 2, 3 đang học ngành Công nghệ thông tin, Kỹ
                    thuật phần mềm hoặc các ngành khác có liên quan tại trường
                    Đại học Khoa học, Đại học Huế.
                  </p>
                  <p className="mb-3">
                    - Đối với sinh viên năm 1: Đạt điểm A học phần Nhập môn lập
                    trình. <br></br>- Đối với sinh viên năm 2, 3: Đạt điểm A học
                    phần Nhập môn lập trình và Kỹ thuật lập trình.
                  </p>
                </Col>
              </Row>
              <div
                className="mb-4"
                style={{ borderBottom: "2px solid white" }}
              ></div>
              <Row>
                <Col sm={4}>
                  <a style={{ fontWeight: "bold", fontSize: "24px" }}>
                    Hình thức tuyển thành viên
                  </a>
                </Col>
                <Col sm={8}>
                  <p>Gồm có 2 vòng: vòng điền form và vòng phỏng vấn.</p>
                  <p>
                    - Vòng điền form: Ứng viên điền vào form đăng ký ở phía
                    dưới. <br></br>- Vòng phỏng vấn: Những ứng viên thể hiện tốt
                    ở vòng điền form sẽ được nhận email mời tham gia vòng phỏng
                    vấn trực tiếp.
                  </p>
                  <p className="mb-3">
                    Sau khi kết thúc 2 vòng, kết quả tuyển thành viên sẽ được
                    thông báo qua email mà các bạn đã điền ở form đăng ký.
                  </p>
                </Col>
              </Row>
              <div
                className="mb-4"
                style={{ borderBottom: "2px solid white" }}
              ></div>
              <Row>
                <Col sm={4}>
                  <a style={{ fontWeight: "bold", fontSize: "24px" }}>
                    Một số lợi ích
                  </a>
                </Col>
                <Col sm={8}>
                  <p>
                    Được tham gia các hoạt động chung của CLB (ngoại khóa,
                    training, các buổi seminar của khoa CNTT)
                  </p>
                  <p>
                    Được hỗ trợ trong khâu chuyên môn, học thuật bởi quý thầy cô
                    dày dặn kinh nghiệm của khoa CNTT
                  </p>
                  <p>
                    Được hỗ trợ kinh phí theo tiết hỗ trợ (Nói rõ khi phỏng vấn)
                  </p>
                  <p>Được đề nghị khen thưởng khi có thành tích xuất sắc</p>
                </Col>
              </Row>
            </Container>
            <Container className="mt-4">
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="white"
                  >
                    <a className="dynamic-text-shadow">01.01.2024</a>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <PlayArrowIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "22px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Mở đơn đăng ký
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="white"
                  >
                    <a className="dynamic-text-shadow">01.01.2024</a>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <MarkEmailReadIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "22px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Duyệt đơn
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="white"
                  >
                    <a className="dynamic-text-shadow">01.01.2024</a>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="error">
                      <RoomIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "22px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Phỏng vấn
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="white"
                  >
                    <a className="dynamic-text-shadow">01.01.2024</a>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot color="secondary">
                      <HowToRegIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "22px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Kết quả
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Container>
          </div>
          <div id="reg-form">
            <Container className="px-2 mt-3 py-4">
              <h2
                className="mb-4 text-center"
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "#03045E",
                }}
              >
                Biểu mẫu tuyển thành viên
              </h2>
              <div className="d-flex justify-content-center">
                <Form style={{ width: "60%" }} id="form-1">
                  <h1
                    className="mb-3"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Phần 1: Thông tin cá nhân
                  </h1>
                  <Row>
                    <Col xs={12} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Họ và tên:</Form.Label>
                        <Form.Control
                          value={formData.hoten}
                          name="hoten"
                          onChange={handleChange}
                          type="text"
                          placeholder="Vui lòng điền đầy đủ và họ và tên của bạn...."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mã sinh viên:</Form.Label>
                        <Form.Control
                          value={formData.msv}
                          name="msv"
                          onChange={handleChange}
                          type="text"
                          placeholder="VD: 23T1020395."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Ngày tháng năm sinh:</Form.Label>
                        <Form.Control
                          value={formData.ngaysinh}
                          name="ngaysinh"
                          onChange={handleChange}
                          type="date"
                          placeholder="Nhập ngày sinh..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Giới tính:</Form.Label>
                        <Row>
                          <Col>
                            <Form.Check
                              value="Nam"
                              onChange={handleChange}
                              name="gioitinh"
                              type="radio"
                              label="Nam"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              value="Nữ"
                              onChange={handleChange}
                              name="gioitinh"
                              type="radio"
                              label="Nữ"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              value="Khác"
                              onChange={handleChange}
                              name="gioitinh"
                              type="radio"
                              label="Khác"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Lớp:</Form.Label>
                        <Form.Control
                          value={formData.lop}
                          name="lop"
                          onChange={handleChange}
                          type="text"
                          placeholder="VD: K47D CNTT..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          value={formData.email}
                          name="email"
                          onChange={handleChange}
                          type="email"
                          placeholder="VD: 23T1020395@husc.edu.vn"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại liên lạc:</Form.Label>
                        <Form.Control
                          value={formData.sodienthoai}
                          name="sodienthoai"
                          onChange={handleChange}
                          type="text"
                          placeholder="Số điện thoại..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={8}>
                      <Form.Group className="mb-3">
                        <Form.Label>Link facebook:</Form.Label>
                        <Form.Control
                          value={formData.diachifb}
                          name="diachifb"
                          onChange={handleChange}
                          type="text"
                          placeholder="VD: https://www.facebook.com/clbhtlt.ithusc/"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center">
                      <Button
                        style={{
                          width: "150px",
                          color: "#0d6efd",
                          backgroundColor: "white",
                        }}
                        variant="primary"
                        onClick={handleClear1}
                      >
                        Xoá
                      </Button>
                      <Button
                        className="ms-3"
                        style={{ width: "150px" }}
                        variant="primary"
                        onClick={handleNext}
                      >
                        Tiếp
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <Form className="d-none" id="form-2" style={{ width: "60%" }}>
                  <Row>
                    <h1
                      className="mb-3"
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      Phần 2: Thông tin ứng tuyển vào CLB
                    </h1>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Nhập điểm hệ 10 môn Nhập môn lập trinh:
                        </Form.Label>
                        <Form.Control
                          value={formData.diemNMLT}
                          name="diemNMLT"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          max="10"
                          step="0.1"
                          placeholder="Nhập điểm Nhập môn lập trình..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Nhập điểm hệ 10 môn Kỹ thuật lập trình:
                        </Form.Label>
                        <Form.Control
                          value={formData.diemKTLT}
                          name="diemKTLT"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          max="10"
                          step="0.1"
                          placeholder="Nhập điểm Kĩ thuật lập trình..."
                        />
                        <Form.Text className="text-muted">
                          * Nếu bạn là sinh viên năm 1 thì có thể bỏ qua câu hỏi
                          này
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Giới thiệu về bản thân</Form.Label>
                        <Form.Control
                          value={formData.gioithieu}
                          name="gioithieu"
                          onChange={handleChange}
                          as="textarea"
                          aria-label="With textarea"
                          placeholder="Nhập giới thiệu về bản thân..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Bạn mong muốn điều gì khi vào clb hỗ trợ lập trình
                        </Form.Label>
                        <Form.Control
                          value={formData.mongmuon}
                          name="mongmuon"
                          onChange={handleChange}
                          as="textarea"
                          aria-label="With textarea"
                          placeholder="Nhập mong muốn của bạn đối với clb..."
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Bạn có sẵn sàng tham gia những buổi hỗ trợ với các bạn
                          sinh viên trong 2 học phần Nhập môn lập trình và Kỹ
                          thuật lập trình không?
                        </Form.Label>
                        <Row className="w-25">
                          <Col>
                            <Form.Check
                              value="Có"
                              onChange={handleChange}
                              name="hotro"
                              type="radio"
                              label="Có"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              value="Không"
                              onChange={handleChange}
                              name="hotro"
                              type="radio"
                              label="Không"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center">
                      <Button
                        className="me-3"
                        style={{
                          width: "150px",
                          color: "#0d6efd",
                          backgroundColor: "white",
                        }}
                        variant="primary"
                        onClick={handleBack}
                      >
                        Lui
                      </Button>
                      <Button
                        className="me-3"
                        style={{ width: "150px" }}
                        variant="primary"
                      >
                        Gửi
                      </Button>
                      <Button
                        style={{
                          width: "150px",
                          color: "#0d6efd",
                          backgroundColor: "white",
                        }}
                        variant="primary"
                        onClick={handleClear2}
                      >
                        Xoá
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Container>
          </div>
        </>
      ) : (
        <div id="sec-1" className="position-relative">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              className="w-100 h-100"
              src="/images/background/backgroundTuyenThanhVienCloseReg.jpg"
              alt="background"
            ></img>
            <div
              className="position-absolute top-0 end-0 d-flex justify-content-end align-items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="me-3">
                <img
                  style={{ width: 250, height: 250 }}
                  src="/images/logo/logoSPIT.png"
                  alt="logo"
                ></img>
              </div>
            </div>
            <div
              className="ms-5 position-absolute top-0 start-0 d-flex justify-content-start align-items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="w-50">
                <h1
                  className="text-white mb-3"
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    textTransform: "uppercase",
                  }}
                >
                  CLB hiện chưa tuyển thành viên.
                </h1>
                <p className="text-white mb-3" style={{ fontSize: "18px" }}>
                  Cảm ơn bạn đã quan tâm đến CLB!<br></br>
                  Hiện tại, CLB chưa có đợt tuyển thành viên mới.<br></br>
                  Bạn hãy theo dõi trang Facebook/Website chính thức của CLB để
                  cập nhật thông tin về các đợt tuyển thành viên sắp tới nhé!
                </p>
                <a
                  href="https://www.facebook.com/clbhtlt.ithusc"
                  target="_blank"
                >
                  <Button className="facebook-button">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          viewBox="0 0 320 512"
                          height="1.2em"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                    </div>
                    <span>Fanpage của CLB</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
