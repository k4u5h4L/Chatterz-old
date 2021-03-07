import React from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
    return (
        <div className="layout-wrapper d-lg-flex">
            <div className="side-menu flex-lg-column mr-lg-1">
                <Navbar />
            </div>
        </div>
    );
}
