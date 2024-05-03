import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import { Outlet } from "react-router-dom";
import RightBarr from "./components/rightbarr/RightBarr";
import RightBar from "./components/rightBar/Rightbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <RightBar />
          <Outlet />
          <RightBarr />
        </div>
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
          element: <Home />,
        },

        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </RouterProvider>
    </div>
  );
}

export default App;
