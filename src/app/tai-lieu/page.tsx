// src/app/TaiLieu/page.js
"use client";

import { useState, useEffect } from "react";

// Import api
import * as googleAPI from '../../Model/Api/GoogleDriveAPI';
import * as config from '../../Model/Auth/ConfigData';
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

        </>
    )
}

export default TaiLieu;