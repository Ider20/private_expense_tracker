import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full m-auto flex">
      <div className="w-2/4 m-auto flex flex-col items-center gap-3">
        <div className="text-2xl font-semibold">I & U</div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-2xl font-semibold">Welcome Back</p>
          <p className="text-base font-normal">
            Welcome back, Please enter your details
          </p>
        </div>

        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Email"
        />
        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Password"
        />
        <Link href={"/dashboard"}>
          <button className="bg-orange-500 w-[390px] rounded-full p-1 mb-4 text-white">
            Log In
          </button>
        </Link>

        <div className="flex flex-row gap-2">
          <div className="">Don't have account?</div>
          <Link href={"/signup"}>
            <span className="text-base text-[#0166FF]">Sign up</span>
          </Link>
        </div>
      </div>
      <div className="w-2/4 bg-orange-500 h-screen"></div>
    </div>
  );
}
