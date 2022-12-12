import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from '../pages/CardDetails';
import HomePage from '../pages/HomePage';
import SignUp from '../pages/SignupPage';

const RootRoute: React.FC = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/character/:characterId" element={<CardDetails/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
            </Routes>
    )
}

export default RootRoute