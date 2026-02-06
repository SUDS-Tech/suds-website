import { Recycle, ThumbsUp, UsersRound } from "lucide-react";

function TeamCircle() {
  return (
    <div className="flex flex-col justify-center items-center py-16 bg-[#0a0a0a]">
      <h2 className="text-white text-3xl font-bold pb-8">How we work</h2>
      <div className="w-100 h-100 p-6 bg-[#111111] border border-gray-800 rounded-full flex justify-center items-center">
        <div className="relative border-2 border-emerald-500/30 w-60 h-60 rounded-full">
          {/* Collaboration first */}
          <div className="absolute -right-20 top-16 bg-[#111111] border border-gray-800 rounded-lg py-3 px-4">
            <div className="flex flex-col justify-center items-center">
              <UsersRound className="text-emerald-500 w-8 h-8 mb-2" />
              <p className="text-white text-sm font-medium">Collaboration first</p>
            </div>
          </div>

          {/* Quality work */}
          <div className="absolute -left-16 top-16 bg-[#111111] border border-gray-800 rounded-lg py-3 px-4">
            <div className="flex flex-col justify-center items-center">
              <ThumbsUp className="text-emerald-500 w-8 h-8 mb-2" />
              <p className="text-white text-sm font-medium">Quality work</p>
            </div>
          </div>

          {/* Continuous improvement */}
          <div className="absolute -bottom-6 left-8 bg-[#111111] border border-gray-800 rounded-lg py-3 px-4">
            <div className="flex flex-col justify-center items-center">
              <Recycle className="text-emerald-500 w-8 h-8 mb-2" />
              <p className="text-white text-sm font-medium">Continuous improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCircle;
