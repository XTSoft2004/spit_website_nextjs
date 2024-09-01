"use client";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "./app.css";
import News from "../../components/News";
import InfoNews from "../../data/News/dataNews.json";
import Link from "next/link";
import ItemCarousel from "@/components/Carousel/ItemCarousel";
const TinTucPage = () => {
  const srcImage = ["/images/backgroud/seminar.jpg", "/images/backgroud/hopdinhki.png", "/images/backgroud/picnic-2024.jpg", "/images/backgroud/member.png", "/images/backgroud/tuyenthanhvien.png"];
  return (
    <div>
      {/* Setup Carousel */}

      <ItemCarousel name="Tin tức và Thông báo" srcImage={srcImage}></ItemCarousel>


      {/* Card */}
      <Container
        style={{ position: "relative", marginTop: -75 }}
        className="z-2"
      >
        <Row>
          <Col xs={12} lg={4}>
            <Link href="#giaithuong">
              <Card
                style={{
                  border: "none",
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <Card.Img
                  className="px-4 pt-3"
                  variant="top"
                  src="/posts/da-nang-code-league-2024/images/5.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-center fw-bold gradient-text">
                    Giải thưởng
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={4}>
            <Link href="#hoatdong">
              <Card
                style={{
                  border: "none",
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <Card.Img
                  className="px-4 pt-3"
                  variant="top"
                  src="/posts/recap-picnic-haiduong-2024/images/17.jpg"
                />
                <Card.Body>
                  <Card.Title className="text-center fw-bold gradient-text">
                    Hoạt động
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={4}>
            <Link href="#noibo">
              <Card
                style={{
                  border: "none",
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <Card.Img
                  className="px-4 pt-3"
                  variant="top"
                  src="/posts/huan-luyen-k47/images/4.png"
                />
                <Card.Body>
                  <Card.Title className="text-center fw-bold gradient-text">
                    Nội bộ
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Các bài viết */}
      <div className="mt-5">
        <Container>
          {/* Các hoạt động */}
          <div
            id="hoatdong"
            className="name-posts mt-5 text-center pt-2 pb-2 imagePost-radius fw-bold"
            style={{ backgroundColor: "#003056", color: "white" }}
          >
            Các hoạt động
          </div>
          {InfoNews.filter((post) => post.tag === "#hoatdong").map(
            (info, index) => {
              return (
                <News
                  key={index}
                  id={info.id}
                  title={info.name}
                  description={info.description}
                  src={info.image}
                  day={info.date.split("-")[0]}
                  month={info.date.split("-")[1]}
                  year={info.date.split("-")[2]}
                ></News>
              );
            }
          )}
          {/* Các giải thưởng */}
          <div
            id="giaithuong"
            className="name-posts mt-5 text-center pt-2 pb-2 imagePost-radius fw-bold"
            style={{ backgroundColor: "#003056", color: "white" }}
          >
            Các giải thưởng
          </div>
          {InfoNews.filter((post) => post.tag === "#giaithuong").map(
            (info, index) => {
              return (
                <News
                  key={index}
                  id={info.id}
                  title={info.name}
                  description={info.description}
                  src={info.image}
                  day={info.date.split("-")[0]}
                  month={info.date.split("-")[1]}
                  year={info.date.split("-")[2]}
                ></News>
              );
            }
          )}
          {/* Các hoạt động nội bộ */}
          <div
            id="noibo"
            className="name-posts mt-5 text-center pt-2 pb-2 imagePost-radius fw-bold"
            style={{ backgroundColor: "#003056", color: "white" }}
          >
            Các hoạt động nội bộ
          </div>
          {InfoNews.filter((post) => post.tag === "#noibo").map(
            (info, index) => {
              return (
                <News
                  key={index}
                  id={info.id}
                  title={info.name}
                  description={info.description}
                  src={info.image}
                  day={info.date.split("-")[0]}
                  month={info.date.split("-")[1]}
                  year={info.date.split("-")[2]}
                ></News>
              );
            }
          )}
        </Container>
      </div>
    </div>
  );
};

export default TinTucPage;
