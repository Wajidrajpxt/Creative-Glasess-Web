import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
export default function Nav() {
  return (
    <>
      <nav class="bg-[#1D87C1]  border-gray-200 dark:bg-gray-900 dark:border-gray-700   ">
        <div class="max-w-screen-xl   flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-[20%] h-[12vh]">
            <img
                className="h-[100%] w-[100%] filtered "
                src="https://www.eyeglasses.pk/media/logo/stores/4/pk-logo_new1__1_.png"
                alt=""
            />
          </div>
          <div class="hidden   w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col   items-center h-[50px]  font-lg p-4 md:p-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  EyeGlasess
                </a>
              </li>
             

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Designer Glasess{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class="z-10  hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  SunGlasess
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Help Center{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[10%]  flex justify-around items-center ">
            <IoLogoTwitter
              className=" text-[#54FFFF] transition-all hover:text-[white] cursor-pointer"
              style={{ fontSize: "25px", colro: "black" }}
            />
            <RiInstagramFill
              className="transition-all  text-[#54FFFF] hover:text-[white] cursor-pointer "
              style={{ fontSize: "25px", colro: "black" }}
            />
            <IoSearch
              className="transition-all  text-[#54FFFF] hover:text-[white] cursor-pointer"
              style={{ fontSize: "25px", colro: "black" }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
