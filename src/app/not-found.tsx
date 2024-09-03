import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <>
            <main className="grid place-items-center" style={{ height: 'calc(100vh - 75px)' }} >
                <div className="text-center">
                    <div style={{ width: '100%', height: '0', paddingBottom:'100%', position:'relative'}}>
                    <iframe src="https://giphy.com/embed/8L0Pky6C83SzkzU55a" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen>
                    </iframe>
                </div>
                <p>
                    <a href="https://giphy.com/gifs/mini-italia-8L0Pky6C83SzkzU55a">via GIPHY
                    </a>
                </p>
                <p className="text-base font-semibold" style={{ color: "#2563EB", fontSize: '50px' }}>404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight">
                    Trang không tồn tại
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md text-sm font-semibold p-3 text-white shadow-sm"
                        style={{ backgroundColor: "#2563EB" }}
                    >
                        Về trang chủ
                    </Link>
                </div>
            </div>
        </main >
        </>
    );
}

export default NotFound;