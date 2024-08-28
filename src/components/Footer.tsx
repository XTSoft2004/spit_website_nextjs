import { Row, Col, Container } from "react-bootstrap";

const Footer = () => (
  <footer
    className="mt-5 p-2"
    style={{ backgroundColor: "#161B22", color: "#fff" }}
  >
    <Container className="p-4">
      <Row>
        <Col xs={12} sm={6} lg={3} className="p-2 px-3">
          <img className="w-100" src="/images/logo/bannerCLB.png"></img>
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
              <div>
                <a href="/">
                  <i className="bi bi-chevron-right"></i>
                  Tuyển thành viên CLB
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="bi bi-chevron-right"></i>
                  Giới thiệu thành viên
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="bi bi-chevron-right"></i>
                  Tài liệu học tập
                </a>
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
                  <img
                    style={{ width: 70, height: 70 }}
                    src="/images/logo/logoKhoaCNTT.png"
                  ></img>
                </div>
                <div className="text-center mx-auto">
                  <span className="fw-bold">Khoa Công Nghệ Thông Tin</span>
                  <p>Faculty of Information Technology</p>
                </div>
              </div>
              <div className="d-flex mt-3">
                <img
                  style={{ width: 70, height: 70 }}
                  src="/images/logo/logoHUSC.png"
                ></img>
                <div className="text-center mx-auto mt-1">
                  <span className="fw-bold">Trường Đại học Khoa Học</span>
                  <p>Hue University of Sciences</p>
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
