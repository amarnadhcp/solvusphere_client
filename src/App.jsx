import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserRegistration from "./pages/User/UserRegistration";
import HomePage from "./pages/User/HomePage";
import UserLayout from "./pages/User/UserLayout";
import CreatedPassword from "./pages/User/CreatePassword";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/create-password" element={<CreatedPassword />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
