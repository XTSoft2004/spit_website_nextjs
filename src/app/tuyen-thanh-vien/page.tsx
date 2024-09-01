// src/app/TuyenThanhVien/page.js
"use client";

import { useState } from "react";

import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import RoomIcon from '@mui/icons-material/Room';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Typography } from '@mui/material';

import './style.css';

export default function TuyenThanhVien() {
    const [formData, setFormData] = useState({
        hoten: '',
        msv: '',
        ngaysinh: '',
        gioitinh: '',
        email: '',
        sodienthoai: '',
        diachifb: '',
        lop: '',
        diemNMLT: '',
        diemKTLT: '',
        gioithieu: '',
        mongmuon: '',
        hotro: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleClear1 = async () => {
        setFormData({
            hoten: '',
            msv: '',
            ngaysinh: '',
            gioitinh: '',
            email: '',
            sodienthoai: '',
            diachifb: '',
            lop: '',
            diemNMLT: formData.diemNMLT,
            diemKTLT: formData.diemKTLT,
            gioithieu: formData.gioithieu,
            mongmuon: formData.mongmuon,
            hotro: formData.hotro,
        });
    }

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
            diemNMLT: '',
            diemKTLT: '',
            gioithieu: '',
            mongmuon: '',
            hotro: '',
        });
    }

    const handleNext = async () => {
        document.getElementById('form-1')?.classList.add('d-none');
        document.getElementById('form-2')?.classList.remove('d-none');
    }

    const handleBack = async () => {
        document.getElementById('form-2')?.classList.add('d-none');
        document.getElementById('form-1')?.classList.remove('d-none');
    }

    return (
        <>
            {/* <div id="sec-1">
                <div className="ttv-sec-bg">
                    <img className='w-100 h-100' src='/images/background/backgroud_member.png' alt="background"></img>
                </div>
                <Container>
                    <div className="w-100 h-100 pt-3 ttv-sec-container">
                        <div className="w-100">
                            <img className="d-block mx-auto" style={{ width: 250, height: 250 }} src='/images/logo/logoSPIT.png' alt="logo"></img>
                        </div>
                        <div className="ttv-sec-content text-white text-center">
                            <h1>Tuyển Thành Viên CLB SPIT</h1>
                            <p>01.10.2024 = 15.10.2024</p>
                        </div>
                        <div className="ttv-sec-button">
                            <Button style={{ width: '200px', height: '50px', fontSize: '20px' }} href="#sec-reg-form">Đăng ký ngay</Button>
                        </div>
                    </div>
                </Container>
            </div> */}
            <div id="sec-2" className="ttv-sec py-4">
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <a className="p-2" style={{ fontWeight: 'bold', fontSize: '20px', backgroundColor: 'white', borderTopLeftRadius: '25px', borderBottomRightRadius: '25px' }}>Điều kiện tham gia</a>
                        </Col>
                    </Row>
                    <Row className="mb-5" style={{ borderBottom: '2px solid white' }}>
                        <Col sm={4}>
                            <a className="p-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>Đối tượng</a>
                        </Col>
                        <Col sm={8}>
                            <p>Là sinh viên K46 hoặc K47, thuộc ngành Công nghệ thông tin hoặc Kỹ thuật phần mềm</p>
                            <p className="mb-3">Đối với các bạn sinh viên K46: Các môn Nhập môn lập trình, Kỹ thuật lập trình phải đạt điểm A (điểm hệ 10 từ 8.5 trở lên)</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} >
                            <a className="p-2" style={{ fontWeight: 'bold', fontSize: '20px' }}>Một số lợi ích</a>
                        </Col>
                        <Col sm={8} >
                            <p>Được tham gia các hoạt động chung của CLB (ngoại khóa, training, các buổi seminar của khoa CNTT)</p>
                            <p>Được hỗ trợ trong khâu chuyên môn, học thuật bởi quý thầy cô dày dặn kinh nghiệm của khoa CNTT</p>
                            <p>Được hỗ trợ kinh phí theo tiết hỗ trợ (Nói rõ khi phỏng vấn)</p>
                            <p>Được đề nghị khen thưởng khi có thành tích xuất sắc</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-4">
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
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
                            <TimelineContent sx={{ py: '22px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Mở đơn đăng ký
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
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
                            <TimelineContent sx={{ py: '22px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Duyệt đơn
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
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
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '22px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Phỏng vấn
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="white">
                                <a className="dynamic-text-shadow">01.01.2024</a>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <HowToRegIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '22px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Kết quả
                                </Typography>
                            </TimelineContent>
                        </TimelineItem >
                    </Timeline>
                </Container>
            </div>
            {/* Chỉnh ngày tháng giới hạn cho form */}
            {new Date(Date.now()).getTime() >= new Date('2024-07-30').getTime() && new Date(Date.now()).getTime() <= new Date('2024-09-10').getTime() ? (<div id="sec-reg-form">
                <Container className="px-2 mt-3 py-4">
                    <h2 className="mb-4 text-center" style={{ fontWeight: 'bold', fontSize: '24px', color: '#03045E' }}>Biểu mẫu tuyển thành viên</h2>
                    <div className="d-flex justify-content-center">
                        <Form className="w-75" id="form-1">
                            <h1 className="mb-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>Phần 1: Thông tin cá nhân</h1>
                            <Row>
                                <Col xs={12} lg={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Họ và tên:</Form.Label>
                                        <Form.Control value={formData.hoten} name="hoten" onChange={handleChange} type="text" placeholder="Vui lòng điền đầy đủ và họ và tên của bạn...." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Mã sinh viên:</Form.Label>
                                        <Form.Control value={formData.msv} name="msv" onChange={handleChange} type="text" placeholder="VD: 23T1020395." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Ngày tháng năm sinh:</Form.Label>
                                        <Form.Control value={formData.ngaysinh} name="ngaysinh" onChange={handleChange} type="date" placeholder="Nhập ngày sinh..." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Giới tính:</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Check value="Nam" onChange={handleChange} name="gioitinh" type="radio" label="Nam" />
                                            </Col>
                                            <Col>
                                                <Form.Check value="Nữ" onChange={handleChange} name="gioitinh" type="radio" label="Nữ" />
                                            </Col>
                                            <Col>
                                                <Form.Check value="Khác" onChange={handleChange} name="gioitinh" type="radio" label="Khác" />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Lớp:</Form.Label>
                                        <Form.Control value={formData.lop} name="lop" onChange={handleChange} type="text" placeholder="VD: K47D CNTT..." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control value={formData.email} name="email" onChange={handleChange} type="email" placeholder="VD: 23T1020395@husc.edu.vn" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Số điện thoại liên lạc:</Form.Label>
                                        <Form.Control value={formData.sodienthoai} name="sodienthoai" onChange={handleChange} type="text" placeholder="Số điện thoại..." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={8}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Link facebook:</Form.Label>
                                        <Form.Control value={formData.diachifb} name="diachifb" onChange={handleChange} type="text" placeholder="VD: https://www.facebook.com/clbhtlt.ithusc/" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} className="d-flex justify-content-center">
                                    <Button style={{ width: '150px', color: '#0d6efd', backgroundColor: 'white' }} variant="primary" onClick={handleClear1}>
                                        Xoá
                                    </Button>
                                    <Button className="ms-3" style={{ width: '150px' }} variant="primary" onClick={handleNext}>
                                        Tiếp
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <Form className="w-75 d-none" id="form-2">
                            <Row>
                                <h1 className="mb-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>Phần 2: Thông tin ứng tuyển vào CLB</h1>
                                <Col xs={12} lg={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Nhập điểm hệ 10 môn Nhập môn lập trinh:</Form.Label>
                                        <Form.Control value={formData.diemNMLT} name="diemNMLT" onChange={handleChange} type="number" min="0" max="10" step="0.1" placeholder="Nhập điểm Nhập môn lập trình..." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Nhập điểm hệ 10 môn Kỹ thuật lập trình:</Form.Label>
                                        <Form.Control value={formData.diemKTLT} name="diemKTLT" onChange={handleChange} type="number" min="0" max="10" step="0.1" placeholder="Nhập điểm Kĩ thuật lập trình..." />
                                        <Form.Text className="text-muted">
                                            * Nếu bạn là sinh viên năm 1 thì có thể bỏ qua câu hỏi này
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Giới thiệu về bản thân</Form.Label>
                                        <Form.Control value={formData.gioithieu} name="gioithieu" onChange={handleChange} as="textarea" aria-label="With textarea" placeholder="Nhập giới thiệu về bản thân..." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Bạn mong muốn điều gì khi vào clb hỗ trợ lập trình</Form.Label>
                                        <Form.Control value={formData.mongmuon} name="mongmuon" onChange={handleChange} as="textarea" aria-label="With textarea" placeholder="Nhập mong muốn của bạn đối với clb..." />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Bạn có sẵn sàng tham gia những buổi hỗ trợ với các bạn sinh viên trong 2 học phần Nhập môn lập trình và Kỹ thuật lập trình không?</Form.Label>
                                        <Row className="w-25">
                                            <Col>
                                                <Form.Check value="Có" onChange={handleChange} name="hotro" type="radio" label="Có" />
                                            </Col>
                                            <Col>
                                                <Form.Check value="Không" onChange={handleChange} name="hotro" type="radio" label="Không" />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} className="d-flex justify-content-center">
                                    <Button className="me-3" style={{ width: '150px', color: '#0d6efd', backgroundColor: 'white' }} variant="primary" onClick={handleBack}>
                                        Lui
                                    </Button>
                                    <Button className="me-3" style={{ width: '150px' }} variant="primary">
                                        Gửi
                                    </Button>
                                    <Button style={{ width: '150px', color: '#0d6efd', backgroundColor: 'white' }} variant="primary" onClick={handleClear2}>
                                        Xoá
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </div >) : (<div id="sec-reg-form"> <Container className="px-3 mt-3"> <h2 className="text-center">Chưa đến thời gian đăng ký</h2> </Container> </div>)}
        </>
    )
}