import { CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter, { PrivateRouteProps } from './PrivateRouter';
import PublicRouter, { PublicRouteProps } from './PublicRouter';

// Containers
const Dashboard = lazy(() => import('../pages/private/Dashboard'));
const SignIn = lazy(() => import('../pages/public/SignIn'));
const SignUp = lazy(() => import('../pages/public/SignUp'));
const PageNotFound = lazy(() => import('../pages/common/PageNotFound'));

const Router = () => {
    return (
        <Suspense fallback={<CircularProgress />}>
            <Routes>
                <Route
                    path="/signin"
                    element={
                        <PublicRouter
                            {...defaultPublicRouteProps}
                            outlet={<SignIn />}
                        />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <PublicRouter
                            {...defaultPublicRouteProps}
                            outlet={<SignUp />}
                        />
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRouter
                            {...defaultPrivateRouteProps}
                            outlet={<Dashboard />}
                        />
                    }
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    );
};

export default Router;

const defaultPublicRouteProps: Omit<PublicRouteProps, 'outlet'> = {
    authenticatedPath: '/',
};

const defaultPrivateRouteProps: Omit<PrivateRouteProps, 'outlet'> = {
    authenticationPath: '/signin',
};
