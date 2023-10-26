import Header from "../Header/Header";
import { AuthProvider } from "../../contexts/authContext";

import Routespe from "../routes/routes";

const Layout = ({ children }) => {
  return (
    <div>
    <AuthProvider>
        {<Header />}
        {children}
        <Routespe />
      </AuthProvider>
    </div>
  );
};

export default Layout;