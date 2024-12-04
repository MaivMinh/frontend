import "./App.css";
import React from "react";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { AppContextProvider } from "./AppContext";
import PrivateRoute from "./components/PrivateRoute";
import GoogleRedirected from "./components/GoogleRedirected";
import FacebookOauth2RedirectHandler from "./components/FacebookOauth2RedirectHandler";
import UnauthorizedPage from "./pages/Unauthorize";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />,
    <Route path="/home" element={<Home />} />
    <Route path="/oauth2/google/redirected" element={<GoogleRedirected />} />
    <Route path="/login" element={<Login />} />,
    <Route path="/register" element={<Register />} />
    <Route element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />} />
    </Route>
    <Route
      path="/oauth2/facebook/redirect"
      element={<FacebookOauth2RedirectHandler />}
    />
    <Route path="/unauthorize" element={<UnauthorizedPage />} />
  </>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
