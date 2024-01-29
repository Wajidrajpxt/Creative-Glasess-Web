import React, { useState } from "react";
import Data from "./Data";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Banner from "./Banner";
import { RiAddFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
// import {FavoriteBorderIcon} from "@mui/icons-material/FavoriteBorder"

export default function Maped() {
  // const [idx, setItems] = useState([]);

  // const [newItem, setNewItem] = useState("");

  // const handleAddItem = (idx) => {
  //   if (newItem.trim() !== "") {
  //     setItems([...idx, { name: newItem, count: 1 }]);
  //     setNewItem("");
  //   }
  // };

  // const handleIncrement = (idx) => {
  //   const updatedItems = [...items];
  //   updatedItems[idx].count++;
  //   setItems(updatedItems);
  // };

  // const handleDecrement = (idx) => {
  //   const updatedItems = [...items];
  //   if (updatedItems[idx].count > 1) {
  //     updatedItems[idx].count--;
  //     setItems(updatedItems);
  //   }
  // };

  return (
    <>
    <div>

      <Nav />
    </div>

      <div className="h-[auto]  w-[100%]  gap-5   bg-[#1D87C1] relative ">
        <div ml-5  className="h-[50vh] w-[30%] absolute left-0 top-0">
          <img
            src="https://i.pinimg.com/originals/c8/55/e3/c855e337c373317e7c0b3a0fb9af4d34.gif"
            alt=""
          />
        </div>

          <div className="flex justify-around items-center flex-col  gap-5">
          <div   className="h-[50vh] w-[30%] absolute left-3 top-0">
          <img
            src="https://i.pinimg.com/originals/c8/55/e3/c855e337c373317e7c0b3a0fb9af4d34.gif"
            alt=""
          />
        </div>
          <div   className="h-[50vh] w-[40%] absolute left-[-10%] top-[120vh] transition-transform rotate-[90deg]">
          <img
            src="https://printsolu.com/wp-content/uploads/2023/03/offer.gif"
            alt=""
          />
        </div>
          <div   className="h-[50vh] w-[40%] absolute left-[62%] top-[120vh] transition-transform rotate-[90deg]">
          <img
            src="https://printsolu.com/wp-content/uploads/2023/03/offer.gif"
            alt=""
          />
        </div>

        {Data.map((item, idx) => {
          return (
            <>
              <div className="transition-all h-[70vh] w-[30%]  bg-[white] group  hover:shadow-xl  flex justify-around items-center flex-col ">
                <div className="p-5 transition-all group-hover:scale-110">
                  <img className="" src={item.img} alt="" />
                </div>

                <div>
                  <h4 className="font-mono text-base hover:underline cursor-pointer">
                    {item.brand}
                  </h4>
                  <h3>{item.price}</h3>
                  <div className="h-[20vh] w-[270px]   p-2 bg-[#1D87C1] rounded-md">
                    <div className=" h-[60px] flex justify-around">
                      <button
                        // onClick={() => handleIncrement(idx)}
                        className="h-[40px]  rounded-lg w-[90px] flex justify-center items-center bg-[silver]"
                      >
                        <RiAddFill
                          style={{ fontSize: "20px", color: "#1D87C1" }}
                        />
                      </button>
                      <button
                        // onClick={() => handleDecrement(idx)}
                        className="h-[40px] rounded-lg pt-2 w-[90px]  bg-[silver] flex justify-center items-center"
                      >
                        <MdDelete style={{ color: "red" }} />
                      </button>
                    </div>
                    <div className="flex justify-center items-center flex-col ">
                      <p className="text-2xl font-semibold text-[black]"></p>
                      <button className="h-[40px] flex justify-center rounded-xl items-center w-[90px] bg-[silver]">
                        <TiDeleteOutline
                          style={{ fontSize: "20px", color: "red" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div   className="h-[50vh] w-[30%] absolute left-[69%] top-0">
          <img src="https://i.pinimg.com/originals/c8/55/e3/c855e337c373317e7c0b3a0fb9af4d34.gif"
            alt=""
          />
        </div>

            </>
          );
        })}
        </div>
        
      </div>
      

      <Footer />
    </>
  );
}
