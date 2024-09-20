import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotFoundPage from '../pages/NotFound';
import Home from '../pages/Home';

export default function AuthRoutes() {
    return(
        <Routes>
            <Route element={<Home />} path='/'  />
            <Route element={<NotFoundPage />} path='*' />
        </Routes>
    )
}