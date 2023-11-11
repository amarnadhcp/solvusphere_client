import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/UserSide/UserNavbar/Navbar";
import UserFooter from "../../components/UserSide/UserFooter/UserFooter";

function UserLayout() {
  return (
    <div className="min-h-screen bg-black">
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <UserFooter />
      </div>
    </div>
  );
}

export default UserLayout;
