import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};