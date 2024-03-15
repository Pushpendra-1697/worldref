import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { RecipeDetail } from "./RecipeDetail";
import { PrivateRoute } from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Deals from "./Deals";
import Details from "./Details";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute>
        <Homepage />
      </PrivateRoute>}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/deals" element={<PrivateRoute>
        <Deals />
      </PrivateRoute>}></Route>
      <Route path="/details" element={<PrivateRoute>
        <Details />
      </PrivateRoute>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/recipe/:id" element={
        <PrivateRoute>
          <RecipeDetail />
        </PrivateRoute>
      }></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
