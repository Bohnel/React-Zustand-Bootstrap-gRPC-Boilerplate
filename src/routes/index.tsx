import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Administration from "../pages/Administration";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import Footer from "@/components/Footer";
import PublicRoute from "./PublicRoute";
import Header from "@/components/Header";
const Router = () => (
  <BrowserRouter basename="/">
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/administration"
        element={
          <PrivateRoute>
            <Administration />
          </PrivateRoute>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
