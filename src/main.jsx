import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./App.jsx";
import Speakers from "./pages/Speakers.jsx";
import Earphones from "./pages/Earphones.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Headphones from "./pages/Headphones.jsx";
import Checkout from "./pages/Checkout.jsx";
import HeadphoneDetails, {
  headphoneDetailsLoader,
} from "./pages/HeadphoneDetails.jsx";
import SpeakerDetails, {
  speakerDetailsLoader,
} from "./pages/SpeakerDetails.jsx";
import EarphoneDetails, {
  earphoneDetailsLoader,
} from "./pages/EarphoneDetails.jsx";
import CartProvider from "./components/Provider.jsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/headphones",
        element: <Headphones />,
      },
      {
        path: "/speakers",
        element: <Speakers />,
      },
      {
        path: "/earphones",
        element: <Earphones />,
      },
      {
        path: "/headphones/:id",
        element: <HeadphoneDetails />,
        loader: headphoneDetailsLoader,
      },
      {
        path: "/speakers/:id",
        element: <SpeakerDetails />,
        loader: speakerDetailsLoader,
      },
      {
        path: "/earphones/:id",
        element: <EarphoneDetails />,
        loader: earphoneDetailsLoader,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    {/* <App /> */}
  </React.StrictMode>
);
