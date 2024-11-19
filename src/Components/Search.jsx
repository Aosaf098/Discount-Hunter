import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <form>
        <div class="max-w-1/2">
          <div class="flex space-x-4">
            <div class="flex rounded-md overflow-hidden w-full">
              <input type="text" placeholder="Enter a Brand or Shop" class="w-full rounded-md rounded-r-none px-4" />
              <button class="bg-purple-500 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                <CiSearch size={30} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
