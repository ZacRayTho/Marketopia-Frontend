import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

function Header() {
  const [state, dispatch] = useGlobalState();

  return (
    <div className="w-full flex justify-between py-2 items-center px-4 border-b-2 drop-shadow z-10">
      <div className="font-righteous lg:text-4xl text-mtpurple">
        <Link href="/">MARKETOPIA</Link>
      </div>
      <div className="flex items-center"> 
        {/* <div>
          <button className="btn lg:hidden">Filters</button>
        </div> */}
        {!state.currentUser ? (
          <div className="lg:space-x-2">
            <Link className="btn" href="/login">
              Log In
            </Link>
            <Link className="btn" href="/register">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="lg:space-x-2">
            <Link className="btn" href="/chat">
              Messages
            </Link>
            <Link className="btn" href="/profile">
              Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
