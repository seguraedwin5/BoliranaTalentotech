import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Layout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold underline">Layout Inicial</h1>
      </header>

      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default Layout;
