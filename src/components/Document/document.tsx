
import react from 'react';

import { Container } from 'react-bootstrap';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Document = () => {
    return (
        <>
            <Container>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="textPrimary">Tài liệu</Typography>
                </Breadcrumbs>

                <h1 className="text-center">Coming Soon</h1>
            </Container>
        </>
    )
}

export default Document;