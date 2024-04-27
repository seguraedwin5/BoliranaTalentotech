import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <header>
        <h1>Layout Inicial</h1>
      </header>

      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
