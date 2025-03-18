import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    element: React.ReactNode;
}

const PublicRoute = ({ element }: PublicRouteProps) => {
    const isAuthenticated = localStorage.getItem('auth') === 'true';

    if (isAuthenticated) {
        // Se já estiver autenticado, redireciona para a home
        return <Navigate to="/" replace />;
    }

    // Se não estiver autenticado, renderiza o componente da rota pública
    return <>{element}</>;
};

export default PublicRoute;
