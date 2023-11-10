import React from "react";
import HomePageButtons from "../../components/UserSide/UserHome/HomePageButtons";
import AdBannerLg from "../../components/UserSide/UserHome/AdBannerLg";
import AdBannerSm from "../../components/UserSide/UserHome/AdBannerSm";
import HeaderTwo from "../../components/UserSide/UserHome/HeaderTwo";
import HeaderOne from "../../components/UserSide/UserHome/HeaderOne";
import AdBannerBottom from "../../components/UserSide/UserHome/AdBannerBottom";
import UserFooter from "../../components/UserSide/UserFooter/UserFooter";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col py-16 gap-3">
        <HomePageButtons page="home" />
        <div className="flex flex-col mx-10 gap-4">
          <div>
            <HeaderOne />
          </div>
          <div className="w-full flex md:flex-row flex-col gap-4">
            <AdBannerLg />
            <AdBannerSm />
          </div>
          <div className="w-full flex md:flex-row flex-col gap-4">
            <AdBannerSm />
            <AdBannerLg />
          </div>
          <div className="mt-8">
            <HeaderTwo />
          </div>
          <div>
            <AdBannerBottom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
