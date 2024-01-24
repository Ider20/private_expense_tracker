import React from "react";
import { Loading } from "./Icons/Loading";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LoadPage = () => {
  const rout = useRouter();
  useEffect(() => {
    const time = setTimeout(() => {
      rout.push("/steps");
    }, 1500);
    return () => clearTimeout(time);
  }, [rout]);

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
