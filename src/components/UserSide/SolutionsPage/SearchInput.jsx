import React from 'react'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Input,
} from "@material-tailwind/react";

function SearchInput() {
    const handleClick = () =>{
        alert('clicked')
    }
  return (
    <div>
      <div className="flex flex-col align-middle items-center md:pt-0 pt-10">
          <div className="flex flex-row items-center justify-between text-white fixed bottom-7 rounded-lg bg-gray-900 md:h-14 h-9 w-11/12 md:pe-4 pe-2">
            <Input
              placeholder="Seek your solutions here..."
              className="border-none text-white bg-white bg-opacity-0 flex flex-row items-center justify-between rounded-lg"
            />
            <IconButton variant="text" className="rounded-full" onClick={handleClick}>
              <PaperAirplaneIcon className="md:h-6 md:w-6 h-5 w-5 text-gray-400" />
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default SearchInput
