import React from "react";
import Home from "./routes/home";
import List from "./routes/list";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./layout/layout";
import Main from "./routes/main";
import User from "./routes/user";
import Login from "./routes/login";
import Register from "./routes/register";
import UpdateUser from "./routes/updateUser";

function App() {
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
          path: "/list",
          element: <List />,
        },
        {
          path: ":id",
          element: <Main />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <User />,
        },
        {
          path: "/profile/update",
          element: <UpdateUser />,
        },
      ],
    },
  ]);

  return (
    // <div className="m-auto h-screen max-w-[1366px] px-5 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
    //   <Navbar />
    //   <Home />
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
