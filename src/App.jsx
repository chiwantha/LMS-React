import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./Context/SidebarContext";
import Background from "./Components/Background";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="bg-[#f6f3f3] antialiased dark:bg-[#333]">
        <Background />
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 py-4 px-2 lg:px-4">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
}

export default App;
