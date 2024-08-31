"use client";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

interface NewsProps {
  id: string;
  title: string;
  description: string;
  src: string;
  day: string;
  month: string;
  year: string;
}

function News({ id, title, description, src, day, month, year }: NewsProps) {
  return (
    <Link href={`/tin-tuc/${id}`}>
      <Row className="mt-3">
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", height: "2px" }}
          className="mb-4 opacity-75"
        ></div>

        {/* Ngày tháng năm */}
        <Col
          xs={12}
          lg={2}
          className="mb-2 text-center text-lg-start opacity-75"
        >
          <Row
            style={{ fontSize: "50px" }}
            className="fw-bold justify-content-center justify-content-lg-start"
          >
            {day}
          </Row>
          <Row className="justify-content-center justify-content-lg-start">
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                height: "3px",
                width: "30%",
              }}
            ></div>
          </Row>
          <Row className="fs-2 justify-content-center justify-content-lg-start">
            tháng {month}
          </Row>
          <Row
            className="fs-2 justify-content-center justify-content-lg-start"
            style={{ lineHeight: "20px" }}
          >
            {year}
          </Row>
        </Col>

        {/* Tiêu đề bài viết */}
        <Col xs={12} lg={4}>
          <Image
            className="imagePost-radius d-block mx-auto mb-3"
            src={src}
            alt="Picture of the author"
            width={500}
            height={500}
          ></Image>
        </Col>

        {/* Nội dung bài viết */}
        <Col
          xs={12}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <Row>
            <p
              className="news-item fw-bold truncate-line-3"
              style={{ fontSize: "35px", lineHeight: "50px" }}
            >
              {title}
            </p>
          </Row>
          <Row>
            <p className="truncate-line-4 mt-3 mb-3">{description}</p>
          </Row>

          <Row className="mt-auto justify-content-end me-3 mb-3">
            <button className="button-34 mx-auto btn-about ">Xem thêm</button>
          </Row>
        </Col>
      </Row>
    </Link>
  );
}
export default News;
