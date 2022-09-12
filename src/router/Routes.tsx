import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import LoaderPage from '../pages/LoaderPage';
import DashboardPage from '../pages/DashboardPage';
import AboutPage from '../pages/AboutPage';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import Reset from '../components/user/Reset';
import Dashboard from '../Dashboard';

export const RoutesSwitch = () => {
    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                <Route path={'/'} element={<DashboardPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/reset'} element={<Reset/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/dashboard'} element={<Dashboard />} />
            </Routes>
        </Suspense>
    );
};

