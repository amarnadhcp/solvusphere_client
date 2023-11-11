import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function HomePageButtons({page}) {
  return (
    <div className="flex flex-row gap-3 align-middle justify-center items-center mt-4 py-2">
      <Link to="/">
        <Button variant={page==='home' ? 'gradient' : 'outlined'} color="yellow" size="sm" className="w-24">
          Home
        </Button>
      </Link>
      <Link to="/solutions">
        <Button variant={page==='solutions' ? 'gradient' : 'outlined'} color="yellow" size="sm">
          Solution
        </Button>
      </Link>
    </div>
  );
}

export default HomePageButtons;
