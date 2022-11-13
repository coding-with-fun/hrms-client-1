import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ authenticationPath, outlet }: PrivateRouteProps) => {
    const isAuthenticated = Boolean(localStorage.getItem('salon-admin-token'));
    if (isAuthenticated) return outlet;

    return (
        <Navigate
            to={{
                pathname: authenticationPath,
            }}
            replace
        />
    );
};

export default PrivateRouter;

export type PrivateRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};
