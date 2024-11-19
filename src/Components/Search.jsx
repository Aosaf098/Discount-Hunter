import React from "react";

const Search = () => {
  return (
    <>
      <form>
        <div class="max-w-1/2">
          <div class="flex space-x-4">
            <div class="flex rounded-md overflow-hidden w-full">
              <input type="text" class="w-full rounded-md rounded-r-none" />
              <button class="bg-purple-500 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
