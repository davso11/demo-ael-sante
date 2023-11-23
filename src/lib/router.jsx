import { createBrowserRouter } from "react-router-dom";

// layouts
import { AuthFormLayout } from "../layouts/auth-form-layout";
import { HomeLayout } from "../layouts/home-layout";

// pages
import { Root } from "../pages/root";
import { Login } from "../pages/login";
import { ForgetPassword } from "../pages/forget-password";
import { ResetPassword } from "../pages/reset-password";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    element: <AuthFormLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/quote-request",
    element: (
      <div className="center-flex min-h-screen">Demande de cotation</div>
    ),
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
