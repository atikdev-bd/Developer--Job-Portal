import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Pages/Home/Home/Home";
import Main from "./Layout/Main";

import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="body max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
