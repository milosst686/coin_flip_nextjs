import React from 'react';
import {BsFillBellFill} from 'react-icons/bs';
import {SiBinance} from 'react-icons/si';
import {MdKeyboardArrowDown, MdOutlineLan} from 'react-icons/md';

export default function Header() {
  return (
         <div className="w-full">
      <div className="flex justify-between pt-5">
        <div className="mx-0">
        <button className=" uppercase rounded-full border-accent-250 border  w-[117px] h-[36px] ml-10 items-center">
          <span className="text-accent-250 text-[13px]"> Swap $Coins</span>  
        </button>
        </div>
        <div className="flex items-center pr-10 gap-x-4 ">
          <span className="rounded-full bg-ui-100 text-white w-[48px] h-[36px] flex items-center justify-center"> 
            <BsFillBellFill />
          </span>
          <span className="rounded-full bg-ui-100 h-[36px] w-[70px] text-accent-300 flex items-center justify-center">
            <SiBinance className="h-5 w-5"/>
            <MdKeyboardArrowDown className="h-5 w-5" />
          </span>
          <div className="rounded-full bg-accent-300  text-font-350  text-[13px] font-medium w-[152px] h-[36px] flex items-center justify-center">
          <p >Connect wallet</p>
          <MdOutlineLan  className="ml-1"/>
          </div>
        </div>
      </div>
       </div>
  )
}
