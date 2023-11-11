import React from "react";
import HomePageButtons from "../../components/UserSide/UserHome/HomePageButtons";
import Suggestions from "../../components/UserSide/SolutionsPage/Suggestions";
import NavBar from "../../components/UserSide/UserNavbar/Navbar";
import SearchInput from "../../components/UserSide/SolutionsPage/SearchInput";

function SolutionPage() {
  return (
    <div className="bg-black min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col py-16 gap-3">
        <HomePageButtons page="solutions" />
        <div>
          <Suggestions />
        </div>
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  );
}

export default SolutionPage;
