import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">Layout Inicial</h1>
      </header>

      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
