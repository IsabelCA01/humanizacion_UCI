import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  else if (!user) return <Navigate to="/" />;
  return <>{children}</>;

}

export default ProtectedRoutes;