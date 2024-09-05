import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import "./app.css";

const Footer = () => (
  <footer className="p-2" style={{ backgroundColor: "#161B22", color: "#fff" }}>
    <Container className="p-4">
      <Row>
        <Col xs={12} sm={6} lg={3} className="p-2 px-3">
          <Link href="/">
            <img className="w-100" src="/images/logo/bannerCLB.png"/>
          </Link>
        </Col>
        <Col xs={12} sm={6} lg={3} className="p-2">
          <div>
            <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
            <div className="mt-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone-fill me-1"></i>
                070 229 1317
              </div>
              <div className="d-flex mt-2 align-items-center">
                <i className="bi bi-envelope-fill me-1"></i>
                clbhtlt.ithusc@gmail.com
              </div>
              <div className="d-flex mt-2 align-items-center">
                <i className="bi bi-geo-alt-fill me-1"></i>
                77 Nguyễn Huệ, TP Huế
              </div>
              {/* Các icon link */}
              <div
                className="d-inline-flex mt-2"
                style={{ position: "relative", zIndex: 2 }}
              >
                <>
                  {/* Thẻ page CLB Hỗ trợ lập trinh */}
                  <div>
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclbhtlt.ithusc&tabs=timeline&width=300&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2894778310840377"
                      width="300"
                      height="130"
                      style={{ border: "none", overflow: "hidden" }}
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={3} className="p-2">
          <div>
            <h4>CÁC LIÊN KẾT HỮU ÍCH</h4>
            <div className="mt-3">
              <div className="mb-2 connect-text">
                <i className="bi bi-chevron-right"></i>
                <Link href="/tuyen-thanh-vien">Tuyển thành viên CLB</Link>
              </div>
              <div className="mb-2 connect-text">
                <i className="bi bi-chevron-right"></i>
                <Link href="/gioi-thieu">Giới thiệu thành viên</Link>
              </div>
              <div className="mb-2 connect-text">
                <i className="bi bi-chevron-right"></i>
                <Link href="/tai-lieu">Tài liệu học tập</Link>
              </div>
              <div className="connect-text">
                <i className="bi bi-chevron-right"></i>
                <Link href="/phan-hoi">Phản hồi</Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={3} className="p-2">
          <div>
            <h4>KẾT NỐI VỚI TỤI MÌNH</h4>
            <div>
              <div className="d-flex mt-4">
                <div>
                  <a target="_blank" href="https://it.husc.edu.vn/">
                    <img
                      style={{ width: 70, height: 70 }}
                      src="/images/logo/logoKhoaCNTT.png"
                    />
                  </a>
                </div>
                <div className="text-center mx-auto connect-text">
                  <a target="_blank" href="https://it.husc.edu.vn/">
                    <span className="fw-bold">Khoa Công Nghệ Thông Tin</span>
                    <p>Faculty of Information Technology</p>
                  </a>
                </div>
              </div>
              <div className="d-flex mt-3">
                <a target="_blank" href="https://husc.edu.vn/">
                  <img
                    style={{ width: 70, height: 70 }}
                    src="/images/logo/logoHUSC.png"
                  />
                </a>
                <div className="text-center mx-auto mt-1 connect-text">
                  <a target="_blank" href="https://husc.edu.vn/">
                    <span className="fw-bold">Trường Đại học Khoa Học</span>
                    <p>Hue University of Sciences</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
