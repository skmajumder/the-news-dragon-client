import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Categories from "../pages/Home/Categories";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import LoginForm from "../pages/Login/LoginForm/LoginForm";
import RegisterForm from "../pages/Login/RegisterForm/RegisterForm";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/0"} />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "category",
    element: <App />,
    children: [
      {
        path: ":id",
        element: <Categories />,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-kolpodrovercel-gmailcom.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-kolpodrovercel-gmailcom.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
