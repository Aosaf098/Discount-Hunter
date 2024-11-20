import React from "react";
import Marquee from "react-fast-marquee";


const Skills = () => {
  return (
    <>
      <div className="w-1/2 mx-auto mt-10 flex flex-col items-center gap-4 justify-center p-4">
        <h3 className="text-4xl">Skills</h3>
        <Marquee speed={100}>
          <div className="p-4 flex justify-between gap-4 *:w-12 *:mx-2">
            <img
              src="https://img.icons8.com/?size=48&id=20909&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=21278&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=13441&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=PXTY4q2Sq2lG&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=80&id=NfbyHexzVEDk&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=g9mmSxx3SwAI&format=png"
              alt=""
            />
            <img
              src="https://img.icons8.com/?size=48&id=62452&format=png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Skills;
