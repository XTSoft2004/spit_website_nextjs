"use client";
import { Col, Container, Row } from "react-bootstrap";
import InfoNews from "../../../data/News/dataNews.json";
import { useEffect, useState } from "react";
import PageNewsTop from "../../../components/News/News_Top";
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true); // Sử dụng async call
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        callback(allText);
      }
    }
  };
  rawFile.send(null);
}

const TinTucPage = ({ params }) => {
  const [post, setPost] = useState({});
  const [content, setContent] = useState("");
  const postId = params.name;

  useEffect(() => {
    const newPost = InfoNews.find((post) => post.id === postId);

    if (newPost) {
      setPost(newPost);
      // Gọi hàm và cập nhật state với nội dung file
      readTextFile(newPost.html, (text) => {
        setContent(text);
      });
    } else {
      setPost(null);
      setContent("");
    }
  }, [postId]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={8}>
            {post ? (
              <>
                <h2>{post.title}</h2>
                {/* Render nội dung HTML */}
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </>
            ) : (
              <p>Post not found</p>
            )}
          </Col>
          <Col>
            <PageNewsTop></PageNewsTop>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TinTucPage;
