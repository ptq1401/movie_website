import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TextBackEnd from "./pages/test";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
//-------------------------------------------
const router = createBrowserRouter([
  { path: "/", element: <Browse /> },
  { path: "/search", element: <Search /> },
  { path: "/test", element: <TextBackEnd /> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
