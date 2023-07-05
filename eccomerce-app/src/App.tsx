import React from "react";
import "./App.css";
import Public from "./routes/public";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "*", Component: Public },
]);

function App() {

  return (
  <div className="App">
  <RouterProvider router={router}/>
  </div>
  )
}

export default App;
