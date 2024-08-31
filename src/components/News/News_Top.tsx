import { Row, Col } from "react-bootstrap";
import InfoNews from "../../data/News/dataNews.json";
import Image from "next/image";
import Link from "next/link";
const PageNewsTop = () => {
  // Chỉ lấy 5 mục từ InfoNews
  const limitedInfoNews = InfoNews.slice(0, 5);
  return (
    <>
      <div>
        <h2 className="fw-bold mt-3 ms-3">Các bài viết mới nhất</h2>
        {limitedInfoNews.map((info, index) => {
          return (
            <Link
              href={`/tin-tuc/${info.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Row
                key={index}
                className="align-items-center shadow-sm p-3 bg-white rounded mt-3"
                style={{ cursor: "pointer" }} // Thay đổi con trỏ khi hover
              >
                <Col>
                  <Image
                    src={info.image}
                    alt="Image"
                    width={500}
                    height={500}
                  ></Image>
                </Col>
                <Col className="ms-1">
                  <Row className="news-item truncate-line-2 fw-bold">
                    {info.name}
                  </Row>
                  <Row className="truncate-line-3 mt-2">{info.description}</Row>
                </Col>
              </Row>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default PageNewsTop;
