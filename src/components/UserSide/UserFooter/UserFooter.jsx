import React from "react";
import { Typography } from "@material-tailwind/react";

function UserFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-3 gap-x-12 border-t border-gray-700 py-6 text-center md:justify-between px-10">
      <Typography color="white" className="font-normal">
        Solvusphere &copy; 2023
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            color="white"
            className="font-normal transition-colors hover:text-yellow-500 focus:text-blue-500"
          >
            mail@solvusphere.com
          </Typography>
        </li>
        <li>
          <Typography
            color="white"
            className="font-normal transition-colors hover:text-yellow-500 focus:text-blue-500"
          >
            8899100200
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default UserFooter;
