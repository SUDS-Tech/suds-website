import { Recycle, ThumbsUp, UsersRound } from "lucide-react";
import React from "react";

function TeamCircle() {
  return (
    <div className="flex flex-col justify-center items-center py-6 bg-linear-to-b from-gray-800 to-gray-950 ">
      <h1 className="text-white text-2xl pb-4">How we work</h1>
      <div className="w-100 h-100 p-3 bg-white rounded-full flex justify-center items-center">
        <div className="relative border-2 border-black w-60 h-60 ">
          <div className="absolute -right-17.5 top-16 bg-white py-2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-black">Collaboration first</p>
              <UsersRound className="text-green-600 w-8 h-8" />
            </div>
          </div>
          <div className="absolute -left-12 top-16">
            <div className="flex flex-col justify-center items-center bg-white py-2">
              <p className="text-black">Quality work</p>
              <ThumbsUp className="text-green-600 w-8 h-8" />
            </div>
          </div>
          <div className="absolute -bottom-3 left-5 bg-white px-1">
            <div className="flex flex-col justify-center items-center">
              <p className="text-black">Continuous improvement</p>
              <Recycle className="text-green-600 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCircle;
