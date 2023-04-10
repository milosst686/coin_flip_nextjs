import React, { useState } from 'react';
import {BsFillBellFill} from 'react-icons/bs';
import {SiBinance} from 'react-icons/si';
import {MdKeyboardArrowDown,MdKeyboardArrowUp,MdOutlineLan} from 'react-icons/md';
import HeaderPadingItem from './HeaderPadingItem';

import {FaGripLines} from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
         <div className="w-full py-[4px] px-[16px]">
      <div className="flex justify-between pt-5 ml">
       <div className="flex items-center">
       <div className="lg:hidden flex justify-center hover:bg-ui-400 rounded-full h-[35px] w-[35px]">
             <button>
             <FaGripLines  className="text-white text-xl "/>
             </button>
          </div>
        <div  className="flex">
        <button className=" rounded-xl border-ui-600 border hover:bg-ui-300 lg:ml-0 w-[117px] h-[36px] ml-5 text-ui-600 text-[15px] font-semibold">
          Swap $BETS
        </button>
        </div>
       </div>
        <div className="flex items-center gap-x-4 ">
          <span className="rounded-full bg-ui-100 text-white w-[48px] h-[36px] flex items-center justify-center"> 
            <BsFillBellFill />
          </span>
          <span className="rounded-full bg-ui-100 h-[36px] w-[70px] text-accent-300 flex items-center justify-center cursor-pointer" 
          onClick={() => setIsOpen((prev)=> !prev)}>
            <SiBinance className="h-5 w-5"/>
            {!isOpen ? (<MdKeyboardArrowDown className="h-5 w-5" />) : (<MdKeyboardArrowUp className="h-5 w-5" />) }
          </span>
          {
            isOpen && (
              <div className=" absolute rounded-[7px] w-[280px] h-[360px] bg-back-250 mt-[400px] p-[4px]">
                  <HeaderPadingItem  imageString="/logo/logo.png" text="Polygon" />
                  <HeaderPadingItem  imageString="/logo/logo.png" text="BNB Smart Chain" isCurrent isText="Current"/>
                  <HeaderPadingItem  imageString="/logo/logo.png" text="Avalanche" />
                  <HeaderPadingItem  imageString="/logo/logo.png" text="Arbitrum One" isSoon isText="Soon"/>
                  <HeaderPadingItem  imageString="/logo/logo.png" text="Polygon Testnet" />
                  <HeaderPadingItem  imageString="/logo/logo.png" text="BNB Smart Chain Testnet" />
                  <HeaderPadingItem  imageString="/logo/logo.png" text="Avalanche Testnet" />
                  <HeaderPadingItem  imageString="/logo/logo.png" text="Arbitrum Tinkeby" isSoon isText="Soon"/>
              </div>
            )
          }
          <div className="rounded-full bg-accent-300  text-font-350  text-[13px] font-medium w-[152px] h-[36px] flex items-center justify-center cursor-pointer">
          <p >Connect wallet</p>
          <MdOutlineLan  className="ml-1"/>
          </div>
        </div>
      </div>
       </div>
  )
}
