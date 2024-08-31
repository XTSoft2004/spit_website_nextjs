// src/app/TuyenThanhVien/page.js
"use client";

import { useState } from "react";

import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import RoomIcon from '@mui/icons-material/Room';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Typography } from '@mui/material';

import './style.css';

export default function TuyenThanhVien() {
    const [formData, setFormData] = useState({
        hoten: '',
        ngaysinh: '',
        gioitinh: '',
        email: '',
        sodienthoai: '',
        diachifb: '',
        quequan: '',
        lop: '',
        diemNMLT: '',
        diemKTLT: '',
        sothich: '',
        uudiem: '',
        khuyetdiem: '',
        mongmuon: '',
        hotro: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleClear = async () => {
        setFormData({
            hoten: '',
            ngaysinh: '',
            gioitinh: '',
            email: '',
            sodienthoai: '',
            diachifb: '',
            quequan: '',
            lop: '',
            diemNMLT: '',
            diemKTLT: '',
            sothich: '',
            uudiem: '',
            khuyetdiem: '',
            mongmuon: '',
            hotro: '',
        });
    }

    return (
        // <>
        //     <div id='sec-1' className='ttv-sec'>
        //         <div className="ttv-sec-bg">
        //             <img className='w-100 h-100' src='/images/background/backgroud_member.png' alt="background"></img>
        //         </div>
        //         <Container>
        //             <div className="w-100 h-100 pt-3 ttv-sec-container">
        //                 <div className="w-100">
        //                     <img className="d-block mx-auto" style={{ width: 250, height: 250 }} src='/images/logo/logoSPIT.png' alt="logo"></img>
        //                 </div>
        //                 <div className="ttv-sec-content text-white text-center">
        //                     <h1>Tuyển Thành Viên CLB SPIT</h1>
        //                     <p>01.10.2024 = 15.10.2024</p>
        //                 </div>
        //                 <div className="ttv-sec-button">
        //                     <Button style={{ width: '200px', height: '50px', fontSize: '20px' }} href="#sec-reg-form">Đăng ký ngay</Button>
        //                 </div>
        //             </div>
        //         </Container>
        //     </div>

        //     <div id="sec-2" className="ttv-sec py-4">
        //         <Container>
        //             <Row className="mb-3">
        //                 <Col>
        //                     <h1>Điều kiện tham gia</h1>
        //                 </Col>
        //             </Row>
        //             <Row className="mb-5">
        //                 <Col sm={4}><h3>Đối tượng</h3></Col>
        //                 <Col sm={8}>
        //                     <p>Là sinh viên K46 hoặc K47, thuộc ngành Công nghệ thông tin hoặc Kỹ thuật phần mềm</p>
        //                     <p>Đối với các bạn sinh viên K46: Các môn Nhập môn lập trình, Kỹ thuật lập trình phải đạt điểm A (điểm hệ 10 từ 8.5 trở lên)</p>
        //                 </Col>
        //             </Row>
        //             <Row>
        //                 <Col sm={4} ><h3>Một số lợi ích</h3></Col>
        //                 <Col sm={8} >
        //                     <p>Được tham gia các hoạt động chung của CLB (ngoại khóa, training, các buổi seminar của khoa CNTT)</p>
        //                     <p>Được hỗ trợ trong khâu chuyên môn, học thuật bởi quý thầy cô dày dặn kinh nghiệm của khoa CNTT</p>
        //                     <p>Được hỗ trợ kinh phí theo tiết hỗ trợ (Nói rõ khi phỏng vấn)</p>
        //                     <p>Được đề nghị khen thưởng khi có thành tích xuất sắc</p>
        //                 </Col>
        //             </Row>
        //         </Container>
        //         <Container className="mt-4">
        //             <Timeline position="alternate">
        //                 <TimelineItem>
        //                     <TimelineOppositeContent
        //                         sx={{ m: 'auto 0' }}
        //                         align="right"
        //                         variant="body2"
        //                         color="white"
        //                     >
        //                         01.01.2024
        //                     </TimelineOppositeContent>
        //                     <TimelineSeparator>
        //                         <TimelineConnector />
        //                         <TimelineDot>
        //                             <PlayArrowIcon />
        //                         </TimelineDot>
        //                         <TimelineConnector />
        //                     </TimelineSeparator>
        //                     <TimelineContent sx={{ py: '12px', px: 2 }}>
        //                         <Typography variant="h6" component="span">
        //                             Mở đơn đăng ký
        //                         </Typography>
        //                     </TimelineContent>
        //                 </TimelineItem>
        //                 <TimelineItem>
        //                     <TimelineOppositeContent
        //                         sx={{ m: 'auto 0' }}
        //                         variant="body2"
        //                         color="white"
        //                     >
        //                         01.01.2024
        //                     </TimelineOppositeContent>
        //                     <TimelineSeparator>
        //                         <TimelineConnector />
        //                         <TimelineDot color="primary">
        //                             <MarkEmailReadIcon />
        //                         </TimelineDot>
        //                         <TimelineConnector />
        //                     </TimelineSeparator>
        //                     <TimelineContent sx={{ py: '12px', px: 2 }}>
        //                         <Typography variant="h6" component="span">
        //                             Duyệt đơn
        //                         </Typography>
        //                     </TimelineContent>
        //                 </TimelineItem>
        //                 <TimelineItem>
        //                     <TimelineOppositeContent
        //                         sx={{ m: 'auto 0' }}
        //                         variant="body2"
        //                         color="white"
        //                     >
        //                         01.01.2024
        //                     </TimelineOppositeContent>
        //                     <TimelineSeparator>
        //                         <TimelineConnector />
        //                         <TimelineDot color="primary" variant="outlined">
        //                             <RoomIcon />
        //                         </TimelineDot>
        //                         <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        //                     </TimelineSeparator>
        //                     <TimelineContent sx={{ py: '12px', px: 2 }}>
        //                         <Typography variant="h6" component="span">
        //                             Phỏng vấn
        //                         </Typography>
        //                     </TimelineContent>
        //                 </TimelineItem>
        //                 <TimelineItem>
        //                     <TimelineOppositeContent
        //                         sx={{ m: 'auto 0' }}
        //                         variant="body2"
        //                         color="white">
        //                         01.01.2024
        //                     </TimelineOppositeContent>
        //                     <TimelineSeparator>
        //                         <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        //                         <TimelineDot color="secondary">
        //                             <HowToRegIcon />
        //                         </TimelineDot>
        //                         <TimelineConnector />
        //                     </TimelineSeparator>
        //                     <TimelineContent sx={{ py: '12px', px: 2 }}>
        //                         <Typography variant="h6" component="span">
        //                             Kết quả
        //                         </Typography>
        //                     </TimelineContent>
        //                 </TimelineItem>
        //             </Timeline>
        //         </Container>
        //     </div>
        //     {/* Chỉnh ngày tháng giới hạn cho form */}
        //     {new Date(Date.now()).getTime() >= new Date('2024-07-30').getTime() && new Date(Date.now()).getTime() <= new Date('2024-09-01').getTime() ? (<div id="sec-reg-form">
        //         <Container className="px-3 mt-3">
        //             <h2 className="text-center">Biểu mẫu tuyển thành viên</h2>
        //             <Form >
        //                 <Row>
        //                     <Col xs={12} lg={6}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>Họ và tên:</Form.Label>
        //                             <Form.Control value={formData.hoten} name="hoten" onChange={handleChange} type="text" placeholder="Nhập tên..." />
        //                             <Form.Text className="text-muted">
        //                                 Vui lòng điền đầy đủ và họ và tên của bạn.
        //                             </Form.Text>
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} lg={3}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>Thông tin khoá của bạn:</Form.Label>
        //                             <Form.Control value={formData.lop} name="lop" onChange={handleChange} type="text" placeholder="Nhập lớp..." />
        //                             <Form.Text className="text-muted">
        //                                 Vd: K47B Kỹ Thuật Phần Mền
        //                             </Form.Text>
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} lg={3}>
        //                         <Form.Group className="mb-3">
        //                             <Form.Label>Giới tính:</Form.Label>
        //                             <Row>
        //                                 <Col>
        //                                     <Form.Check value="Nam" onChange={handleChange} name="gioitinh" type="radio" label="Nam" />
        //                                 </Col>
        //                                 <Col>
        //                                     <Form.Check value="Nữ" onChange={handleChange} name="gioitinh" type="radio" label="Nữ" />
        //                                 </Col>
        //                                 <Col>
        //                                     <Form.Check value="Khác" onChange={handleChange} name="gioitinh" type="radio" label="Khác" />
        //                                 </Col>
        //                             </Row>
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} lg={6}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>Email:</Form.Label>
        //                             <Form.Control value={formData.email} name="email" onChange={handleChange} type="email" placeholder="Email..." />
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} lg={3}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>SDT liên lạc:</Form.Label>
        //                             <Form.Control value={formData.sodienthoai} name="sodienthoai" onChange={handleChange} type="number" placeholder="SDT..." />
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} lg={3}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>Link facebook:</Form.Label>
        //                             <Form.Control value={formData.diachifb} name="diachifb" onChange={handleChange} type="number" placeholder="Link facebook..." />
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} lg={6}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>Nhập điểm hệ 10 môn Nhập môn lập trình:</Form.Label>
        //                             <Form.Control value={formData.diemNMLT} name="diemNMLT" onChange={handleChange} type="number" min="0" max="10" step="0.1" placeholder="Nhập điểm Nhập môn lập trình..." />
        //                             <Form.Text className="text-muted">
        //                                 Nếu bạn thuộc K46 và chưa có điểm thì vui lòng để trống.
        //                             </Form.Text>
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} lg={6}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>Nhập điểm hệ 10 môn Kĩ thuật lập trình</Form.Label>
        //                             <Form.Control value={formData.diemKTLT} name="diemKTLT" onChange={handleChange} type="number" min="0" max="10" step="0.1" placeholder="Nhập điểm Kĩ thuật lập trình..." />
        //                             <Form.Text className="text-muted">
        //                                 Nếu bạn thuộc K46 và chưa có điểm thì vui lòng để trống.
        //                             </Form.Text>
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12}>
        //                         <Form.Group className="mb-3" >
        //                             <Form.Label>Bạn mong muốn điều gì khi vào clb hỗ trợ lập trình</Form.Label>
        //                             <Form.Control value={formData.mongmuon} name="mongmuon" onChange={handleChange} as="textarea" aria-label="With textarea" placeholder="Nhập mong muốn của bạn đối với clb..." />
        //                         </Form.Group>
        //                     </Col>
        //                     <Col xs={12} className="d-flex justify-content-center">
        //                         <Button className="me-3" style={{ width: '150px' }} variant="primary">
        //                             Gửi
        //                         </Button>
        //                         <Button style={{ width: '150px', color: '#0d6efd', backgroundColor: 'white' }} variant="primary" onClick={handleClear}>
        //                             Xoá
        //                         </Button>
        //                     </Col>
        //                 </Row>
        //             </Form>
        //         </Container>
        //     </div >) : (<div id="sec-reg-form"> <Container className="px-3 mt-3"> <h2 className="text-center">Chưa đến thời gian đăng ký</h2> </Container> </div>)}

        // </>
        <>
            <div id="sec-1">
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
            </div>
        </>
    )
}