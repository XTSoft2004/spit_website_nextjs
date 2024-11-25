// src/app/TaiLieu/page.js
"use client";

import { useState, useEffect } from "react";

import Document from '../../components/Document/document';

import './style.css';

const TaiLieu = () => {
    useEffect(() => {
        document.title = "Tài liệu - SPIT";
    }, []);

    return (
        <>
            <div id="sec-1">
                <div className="flex h-[300px] flex-col items-center justify-center">
                    <a className="text-center mt-lg-4 text-4xl font-bold">Tài liệu học tập</a>
                    <div className="searchbar" style={{ width: '40%' }}>
                        <input className="search_input w-100" type="text" name="" placeholder="Search..." />
                    </div>
                </div>
            </div>

            <div id="sec-2">
                <Document />
            </div>
        </>
    )
}

export default TaiLieu;