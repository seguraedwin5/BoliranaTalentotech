import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
