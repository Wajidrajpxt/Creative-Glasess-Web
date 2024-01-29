import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
export default function Banner() {
  // const [price, setprice] = useState(0);

  // function inc() {
  //   setprice(price + 1);
  // }

  // function dec() {
  //   setprice(price - 1);
  // }

  // function Del() {
  //   setprice(0);
  // }

  return (
    <>
      <div className="transition-all  flex justify-center items-center relative  ">
        <div className=" w-[95%] bg-[red] ">
          <img
            className=""
            src="https://www.eyeglasses.pk/media/weltpixel/owlcarouselslider/images/w/e/web_7.gif"
            alt=""
          />
          <div className=" h-[70px] w-[70px] bg-[#90C4DD] border rounded-full fixed left-[80rem] top-[28rem] flex justify-center items-center">
            <a href="# ">
              <FaArrowUp className="transition-all text-[50px] text-[#1D87C1] hover:translate-y-2  hover:opacity-0.6 cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto w-[100%]  flex justify-start  flex-col">
        <div className="bg-[#1D87C1]  mt-10 p-2">
          <h1 className="font-light pl-9 text-[white]  text-4xl font-mono">
            RECOMMENDED PRODUCTS
          </h1>
        </div>
        <div className="flex mt-10 justify-around items-center ">
          <div className="h-[70vh]  w-[22%] group bg-[white] transition-all flex justify-around items-center flex-col hover:shadow-2xl  cursor-pointer">
            <div>
              <FavoriteBorderIcon className="font-semibold ml-[15rem] hover:opacity-[0.7] cursor-pointer " />
            </div>

            <div className="p-5 transition-all group-hover:scale-110 ">
              <img
                className=""
                src=" https://www.eyeglasses.pk/media/catalog/product/1/4/143191w.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
            </div>

            <div className=" w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                {" "}
                PKR 980.56
              </h3>
            </div>

           
          </div>
          <div className="transition-all h-[70vh] w-[22%] group  bg-[white] hover:shadow-2xl   cursor-pointer flex justify-around items-center flex-col ">
            <div>
              <FavoriteBorderIcon className="transition-all font-semibold ml-[15rem] group-hover:opacity-[0.7] cursor-pointer" />
            </div>

            <div className=" h-[25vh] w-[100%] p-5 transition-all group-hover:scale-110">
              <img
                className=""
                src="  https://www.eyeglasses.pk/media/catalog/product/1/4/143545w.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
              
            </div>

            <div className="h-[75vh] w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                {" "}
                PKR 980.56
              </h3>
              
            
            </div>
          </div>
          <div className="h-[70vh] transition-all  w-[22%]  bg-[white] group  hover:shadow-2xl  flex justify-around items-center flex-col ">
            <div>
              <FavoriteBorderIcon className="transition-all font-semibold ml-[15rem] hover:opacity-[0.7] cursor-pointer" />
            </div>

            <div className="h-[25vh] w-[100%] p-5 transition-all group-hover:scale-110">
              <img
                className=" "
                src="https://www.eyeglasses.pk/media/catalog/product/1/4/143476w.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
            </div>

            <div className="w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                PKR 980.56
              </h3>
              
         
            </div>
          </div>
          <div className="h-[70vh] w-[22%] group  bg-[white] flex justify-around items-center hover:shadow-2xl flex-col ">
            <div>
              <FavoriteBorderIcon className="transition-all font-semibold ml-[15rem] hover:opacity-[0.7] cursor-pointer" />
            </div>

            <div className="p-5  transition-all group-hover:scale-110">
              <img
                className=" "
                src="https://www.eyeglasses.pk/media/catalog/product/1/4/143476w.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
            </div>

            <div className="w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                {" "}
                PKR 980.56
              </h3>
              
           
            </div>
          </div>
        </div>
      </div>

      {/* 2222 */}

      <div className="h-auto w-[100%]  flex justify-start  flex-col">
        <div className="bg-[#1D87C1]  mt-10 p-2">
          <h1 className="font-light pl-9 text-white text-4xl font-mono">
            MOST EXPENSIVE PRODUCTS
          </h1>
        </div>
        <div className="flex mt-10 justify-around items-center ">
          <div className="h-[70vh] w-[22%] group bg-[white] transition-all flex justify-around items-center flex-col hover:shadow-2xl  cursor-pointer">
            <div>
              <FavoriteBorderIcon className="font-semibold ml-[15rem] hover:opacity-[0.7] cursor-pointer " />
            </div>

            <div className="h-[25vh] w-[100%] p-5 transition-all group-hover:scale-110 ">
              <img
                className="h-[100%] w-[100%]"
                src="https://www.eyeglasses.pk/media/catalog/product/3/0/30022.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
            </div>

            <div className="w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                {" "}
                PKR 980.56
              </h3>
              

            </div>
          </div>
          <div className="transition-all h-[70vh] w-[22%] group  bg-[white] hover:shadow-2xl   cursor-pointer flex justify-around items-center flex-col ">
            <div>
              <FavoriteBorderIcon className="transition-all font-semibold ml-[15rem] group-hover:opacity-[0.7] cursor-pointer" />
            </div>

            <div className="h-[25vh] w-[100%] p-5 transition-all group-hover:scale-110">
              <img
                className="h-[100%] w-[100%] "
                src=" https://www.eyeglasses.pk/media/catalog/product/1/3/139397s.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
            </div>

            <div className="w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                {" "}
                PKR 980.56
              </h3>
              
           
            </div>
          </div>
          <div className="transition-all h-[70vh] w-[22%]  bg-[white] group  hover:shadow-2xl  flex justify-around items-center flex-col ">
            <div>
              <FavoriteBorderIcon className="transition-all font-semibold ml-[15rem] hover:opacity-[0.7] cursor-pointer" />
            </div>

            <div className="p-5 transition-all h-[25vh] w-[100%] group-hover:scale-110">
              <img
                className="h-[100%] w-[100%] "
                src="https://www.eyeglasses.pk/media/catalog/product/1/3/139414s.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
            </div>

            <div className="w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                {" "}
                PKR 980.56
              </h3>
              
          
            </div>
          </div>
          <div className="h-[70vh] border-e-red-500 w-[22%] group  bg-[white] flex justify-around items-center hover:shadow-2xl flex-col ">
            <div>
              <FavoriteBorderIcon className="h-[25vh] w-[100%] transition-all font-semibold ml-[15rem] hover:opacity-[0.7] cursor-pointer" />
            </div>

            <div className="p-5 h-[40vh] w-[100%] transition-all group-hover:scale-110">
              <img
                className=" h-[100%] w-[100%]"
                src="https://www.eyeglasses.pk/media/catalog/product/1/5/154715--147169_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400"
                alt=""
              />
            </div>

            <div className="h-[75vh] w-[100%] flex justify-center items-center flex-col ">
              <h4 className="font-mono text-base hover:underline cursor-pointer">
                RETANGLE EYE GLASESS
              </h4>
              <p className="font-mono text-sm text-[silver]"> As low As </p>
              <h3 className="font-semibold text-[20px] text-[black]">
                {" "}
                PKR 980.56
              </h3>
              

            </div>
          </div>
        </div>
      </div>

      {/* 33333 */}
      <div className="h-auto w-[100%]  flex justify-start pb-12  flex-col">
        <div className="bg-[#1D87C1]  mt-10 p-2">
          <h1 className="font-light pl-9  text-white text-4xl font-mono">
            MOST EXPENSIVE PRODUCTS
          </h1>
        </div>
        <div className="flex mt-10 justify-around items-center">
          <div className="h-[70vh] w-[33%] group relative bg-[white] transition-all flex justify-around items-center flex-col   cursor-pointer">
            <div className="absolute left-0 top-0  ">
              <img
                className="p-5 transition-all group-hover:opacity-[0.8]"
                src="https://www.eyeglasses.pk/media/wysiwyg/men.png"
                alt=""
              />
            </div>
            <Link to="/Maped/0">
              <button className=" absolute rounded-lg font-semibold left-[40%] top-[80%] p-3 h-[13vh] w-[25%] group bg-[#3e718565] text-[black] hover:opacity-[0.7]">
                Men's Glase ss
              </button>
            </Link>
          </div>
          <div className="transition-all h-[70vh] w-[33%] group relative  bg-[white]   cursor-pointer flex justify-around items-center flex-col ">
            <div className=" absolute left-0 top-0  ">
              <img
                className=" p-5 transition-all group-hover:opacity-[0.8]"
                src=" https://www.eyeglasses.pk/media/Blog/women_4.png"
                alt=""
              />
            </div>
            <Link to="/Maped/1">
              <button className=" absolute font-semibold rounded-lg left-[40%] top-[80%] p-3 h-[13vh] w-[25%] group bg-[#ffc0cb66] text-[black] hover:opacity-[0.7]">
                Women's Glasess
              </button>
            </Link>
          </div>
          <div className="transition-all h-[71vh] w-[32%] relative  bg-[white] group   flex justify-around items-center flex-col ">
            <div className="absolute left-0 top-2 ">
              <img
                className="  p-5 transition-all  group-hover:opacity-[0.8]"
                src=" https://www.eyeglasses.pk/media/Blog/kids.png"
                alt=""
              />
            </div>
            <Link to="/Maped/2">
              <button className=" absolute font-semibold left-[40%] top-[75%] p-3 rounded-lg h-[13vh] w-[25%] group bg-[#ffa60061] text-[black] hover:opacity-[0.7]">
                kid's Glasess
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
