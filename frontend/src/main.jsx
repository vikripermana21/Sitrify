import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrediksiPage from "./pages/prediksiPage.jsx";
import ChartsPage from "./pages/chartsPage.jsx";
import DaftarArtisPage from "./pages/daftarArtisPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/prediksi",
    element: <PrediksiPage />,
  },
  {
    path: "/charts",
    element: <ChartsPage />,
  },
  {
    path: "/daftar-artis",
    element: <DaftarArtisPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
