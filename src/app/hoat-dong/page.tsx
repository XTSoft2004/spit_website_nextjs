"use client";

import { Row, Col, Container, Carousel } from "react-bootstrap";
import ItemCarousel from "@/components/Carousel/ItemCarousel";
import Image from 'next/image';
import './app.css'
const HoatDongPage = () => {
    const srcImage = ["/images/backgroud/picnic-2024.jpg", "/images/backgroud/member.png"];
    return (
        <>
            <ItemCarousel name="Hoạt động" srcImage={srcImage}></ItemCarousel>

            <div id="sec2" style={{
                color: '#103994',
                backgroundImage: 'url("/images/backgroud/pages/hoat-dong/2.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingTop: '20px',
                paddingBottom: '20px',
            }}>
                <Container className="pt-2 pb-2">
                    <Row>
                        <Col xs={12} lg={5} className="d-flex align-items-center">
                            <Carousel>
                                <Carousel.Item>
                                    <Image
                                        className="mx-auto"
                                        src='/images/backgroud/pages/hoat-dong/tu-hoc-1.jpg'
                                        alt="image"
                                        width={1000}
                                        height={1000}
                                        style={{ objectFit: 'cover' }}
                                    >
                                    </Image>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="mx-auto"
                                        src='/images/backgroud/pages/hoat-dong/tu-hoc-2.jpg'
                                        alt="image"
                                        width={1000}
                                        height={1000}
                                        style={{ objectFit: 'cover' }}
                                    >
                                    </Image>
                                </Carousel.Item>
                            </Carousel>


                        </Col>
                        <Col xs={12} lg={6} className="ms-2 mt-2">
                            <Row className="mb-3 fw-bold fs-1 w-100">
                                <p className="name-section">Phòng tự học</p>
                                <div className="gradian-div"></div>
                            </Row>
                            <div className="fs-4 mb-3">
                                Tại các buổi tự học, sẽ có các thành viên CLB trực tại phòng để hướng dẫn, giải đáp thắc mắc về lập trình cho các bạn sinh viên ngoài giờ lên lớp.
                                <br />
                                <span className="fw-bold">- Thời gian:</span> 14:00 - 17:30 thứ 3 và 14:00 - 16:00 thứ 6 hàng tuần.
                                <br />
                                <span className="fw-bold">- Địa điểm:</span> Phòng E202 - Lab doanh nghiệp khoa Công nghệ thông tin.
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div id="sec3" style={{
                color: '#fff',
                backgroundImage: 'url("/images/backgroud/pages/hoat-dong/1.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingTop: '20px',
                paddingBottom: '20px',
            }}>
                <Container className="pt-5 pb-5">
                    <Row className="d-flex align-items-center">
                        <Col xs={12} lg={6}>
                            <Row className="mb-3 fw-bold fs-1 w-100">
                                <p className="name-section">Seminar</p>
                                <div className="gradian-div"></div>
                            </Row>
                            <Row className="fs-4 mb-3">CLB thường tổ chức các buổi seminar có diễn giả là quý thầy cô, các khách mời có nhiều kinh nghiệm trong ngành công nghệ thông tin. Qua đó giúp các thành viên tham gia được cùng thảo luận, từ đó thúc đẩy tinh thần học tập và nâng cao kỹ năng lập trình.</Row>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Image
                                className="mx-auto"
                                src='/images/backgroud/pages/hoat-dong/seminar.jpg'
                                alt="image"
                                width={500}
                                height={500}
                                style={{ objectFit: 'cover' }}
                            >
                            </Image>
                            <p className="mt-2 text-center">
                                Seminar “Knowledge, Skills and Applications”
                                <br />
                                tổ chức vào tháng 3 năm 2024
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="sec4" style={{
                color: '#103994',
                backgroundImage: 'url("/images/backgroud/pages/hoat-dong/2.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingTop: '20px',
                paddingBottom: '20px',
            }}>
                <Container className="pt-2 pb-2">
                    <Row>
                        <Col xs={12} lg={5} className="d-flex align-items-center">
                            <Carousel>
                                <Carousel.Item>
                                    <Image
                                        className="mx-auto"
                                        src='/images/backgroud/pages/hoat-dong/spit-contest-lan-2.jpg'
                                        alt="image"
                                        width={1000}
                                        height={1000}
                                        style={{ objectFit: 'cover' }}
                                    >
                                    </Image>
                                    <Carousel.Caption>
                                        <p className="mt-2 text-center fw-bold" style={{
                                            textShadow: '2px 2px 4px #000000'
                                        }}>
                                            Trao giải SPIT Newbie Contest lần thứ hai
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        className="mx-auto"
                                        src='/images/backgroud/pages/hoat-dong/spit-contest-lan-1.jpg'
                                        alt="image"
                                        width={1000}
                                        height={1000}
                                        style={{ objectFit: 'cover' }}
                                    >
                                    </Image>
                                    <Carousel.Caption>
                                        <p className="mt-2 text-center fw-bold" style={{
                                            textShadow: '2px 2px 4px #000000'
                                        }}>
                                            Trao giải SPIT Newbie Contest lần thứ nhất
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6} className="ms-2">
                            <Row className="mb-3 fw-bold fs-1 w-100">
                                <p className="name-section">SPIT Contest</p>
                                <div className="gradian-div"></div>
                            </Row>
                            <div className="fs-4 mb-3">
                                SPIT Contest là chuỗi contest lập trình thi đấu do CLB tổ chức. Đội ngũ ra đề cho SPIT Contest là những thành viên thuộc Ban Chuyên môn của CLB đã đạt được nhiều giải thưởng tại các kỳ thi cấp khu vực, quốc gia và quốc tế. Đây là một sân chơi dành cho các bạn học sinh, sinh viên yêu thích thuật toán và coding.
                                <br />
                                <span className="fw-bold">- Hình thức thi:</span> online trên website coder.husc.edu.vn
                                <br />
                                <span className="fw-bold">- Thời gian:</span> sẽ được cập nhật sau
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}
export default HoatDongPage;