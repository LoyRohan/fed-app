import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
const Login = lazy(() => import('../Components/pages/Login'));
const Grid = lazy(() => import('../Components/pages/Grid'));
// const ModuleApp = lazy(() => import('../Components/SharedComponents/Moduel'));
import { useSelector } from "react-redux";
import { RootState } from '../state/store';

const Loader = () => <div className="loader">Loading...</div>;

const AppRoutes = () => {
    // const navigate = useNavigate()
    const loginStatus = useSelector((state: RootState) => state.appConfig.loginStatus)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        if (!loginStatus) {
            // navigate("/login")
        }
    }, [loginStatus])

    // console.log({ loginStatus })

    return isLoading ? (
        <Loader />
    ) : (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={!loginStatus ? <Navigate replace to="/login" /> : <Navigate to="/dashboard" replace />} />
                    <Route
                        path="/login"
                        element={!loginStatus ? <Login /> : <Navigate to="/dashboard" replace />}
                    />
                    <Route path="/grid" element={<Grid />} />
                    {/* <Route path="/module-app" element={<ModuleApp />} /> */}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;