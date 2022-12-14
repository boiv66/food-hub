import React from "react";
import { Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("pages/Login"));
const Customer = React.lazy(() => import("pages/Customer"));
const Welcome = React.lazy(() => import("pages/Welcome"));


const MainRoutes = () => {
  return (
    <React.Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/welcome" element={<Welcome/>} />
    </Routes>
    </React.Suspense>
  );
};

export default MainRoutes;
