'use client'

import GPT_Page from "./GPT_Page/GPT_Page";
import Home_Page from "./Home/Home_Page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomLink from "./CustomLink";
import dynamic from 'next/dynamic';

export default function Home() {

    const Home_Page = dynamic(() => import('./Home/Home_Page'), { ssr: false });
    const GPT_Page = dynamic(() => import('./GPT_Page/GPT_Page'), { ssr: false });

    return (
        <Router>
        <nav className="bg-[#39FF14] font-bold h-min flex items-center">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/chat">Chat</CustomLink>
        </nav>
        <Routes>
            <Route path="/" element={Home_Page()}/>
            <Route path="/chat" element={GPT_Page()}/>
        </Routes>
        </Router>
    );
}