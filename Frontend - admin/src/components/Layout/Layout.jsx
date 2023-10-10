import Header from "../Header/Header";
import { AuthProvider } from "../../contexts/authContext";

const Layout = ({ children }) => {
  return (
    <div>
    <AuthProvider>
      {<Header />}
      {children}
      </AuthProvider>
    </div>
  );
};

export default Layout;