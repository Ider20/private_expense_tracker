import React from "react";
import { Loading } from "./Icons/Loading";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LoadPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <div>
        I<span className="text-orange-500">&</span>U
      </div>
      <Loading />
      <div className="text-center text-gray-400">Түр хүлээнэ үү...</div>
    </div>
  );
};

export default LoadPage;
