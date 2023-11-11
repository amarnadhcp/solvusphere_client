import { Button } from "@material-tailwind/react";
import React from "react";

function HomePageButtons() {
  return (
    <div className="flex flex-row gap-3 align-middle justify-center items-center mt-4 py-2">
      <Button variant="gradient" color="yellow" size="sm" className="w-24">
        Home
      </Button>
      <Button variant="outlined" color="yellow" size="sm">
        Solution
      </Button>
    </div>
  );
}

export default HomePageButtons;
