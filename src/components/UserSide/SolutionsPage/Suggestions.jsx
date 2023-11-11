import { Typography } from "@material-tailwind/react";
import React from "react";

function Suggestions() {
  return (
    <div className="flex flex-col md:gap-7 gap-4">
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-7 gap-4 text-center">
        <div className="flex flex-row items-center justify-center outline-dotted outline-gray-600 md:h-20 h-16 rounded-lg md:w-1/4 w-3/4">
          <Typography color="white">
            Dummy data will be displayed here
          </Typography>
        </div>
        <div className="flex flex-row items-center justify-center  outline-dotted outline-gray-600 md:h-20 h-16 rounded-lg md:w-1/4 w-3/4">
          <Typography color="white">
            Dummy data will be displayed here
          </Typography>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-7 gap-4 text-center">
        <div className="flex flex-row items-center justify-center  outline-dotted outline-gray-600 rounded-lg md:h-20 h-16 md:w-1/4 w-3/4">
          <Typography color="white">
            Dummy data will be displayed here
          </Typography>
        </div>
        <div className="flex flex-row items-center justify-center outline-dotted outline-gray-600 rounded-lg md:h-20 h-16 md:w-1/4 w-3/4">
          <Typography color="white">
            Dummy data will be displayed here
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
