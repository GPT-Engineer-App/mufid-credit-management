import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center">
      <Outlet />
      <footer className="mt-auto p-4 text-center text-xs">
        © 2024 Otniel FB
      </footer>
    </main>
  );
};

export default Layout;
