import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { SolvingPage } from "./pages/SolvingPage";
import { ThankYou } from "./pages/ThankYou";

const router = createBrowserRouter([
  // step 01
  {
    path: "/",
    element: <Home />,
  },

  // step 02
  {
    path: "/prepare",
    element: <SolvingPage />,
  },

  // step 06
  {
    path: "/thankyou",
    element: <ThankYou />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
