
import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Import mui

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// Import api
import * as googleAPI from '../../Model/Api/GoogleDriveAPI';
import * as config from '../../Model/Auth/ConfigData';

interface Column {
    id: 'mimeType' | 'name';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'mimeType', label: 'Loại', minWidth: 50 },
    { id: 'name', label: 'Tên', minWidth: 100 },
];

interface DataTable {
    mimeType: string;
    name: string;
}

function createDataTable(
    mimeType: string,
    name: string,
): DataTable {
    return { mimeType, name };
}

const rows = [
    createDataTable('India', 'IN'),
    createDataTable('China', 'CN'),
    createDataTable('Italy', 'IT'),
    createDataTable('United States', 'US'),
    createDataTable('Canada', 'CA'),
    createDataTable('Australia', 'AU'),
    createDataTable('Germany', 'DE'),
    createDataTable('Ireland', 'IE'),
    createDataTable('Mexico', 'MX'),
    createDataTable('Japan', 'JP'),
    createDataTable('France', 'FR'),
    createDataTable('United Kingdom', 'GB'),
    createDataTable('Russia', 'RU'),
    createDataTable('Nigeria', 'NG'),
    createDataTable('Brazil', 'BR'),
];

const Document = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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

                {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <a href="/">
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </a>
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper> */}
            </Container>
        </>
    );
}

export default Document;