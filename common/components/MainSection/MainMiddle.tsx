import React, { useState } from 'react';
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';
import MainMiddleTextComp from './MainMiddleTextComp';
import MainPadding from './MainPadding';
import {SiBinance} from 'react-icons/si'

export default function MainMiddle() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-1 flex-col items-center p-[12px]">
              <p className="text-white font-bold font-sans text-[72px] ">
                1.94x
              </p>
              <video src="/Matic_heads.webm"  width="140" height="140" autoPlay={true} />
              <div className="flex justify-center">
                <div className="uppercase bg-ui-300 text-sm font-bold text-font-400 rounded-l-xl h-[56px] w-[74px] flex items-center justify-center border-r border-r-ui-400">
                  <p>BET</p>
                </div>
                <div className="bg-ui-300 flex items-center border-r border-r-ui-400 w-2/5">
                <input required type="text" inputMode="numeric" defaultValue={0} className=" bg-ui-300 text-white text-xl mx-[20px] w-1/2 " />
                <button className=" bg-ui-400 text-font-400 rounded-xl m-[14px] h-[28px] w-[50px] ">max</button>
                </div>
                <div className="bg-ui-300 rounded-r-xl w-[150px] flex items-center justify-center cursor-pointer"  onClick={() => setIsOpen((prev)=> !prev)}>
                    <div className="flex items-center">
                    {!isOpen ? (<RiArrowDownSFill className="text-font-400 text-2xl" />) 
                    : (<RiArrowUpSFill className="text-font-400 text-2xl"/>) }
                    {
                    isOpen && (
                    <div className="absolute rounded-[7px] w-[180px] h-[120px] bg-back-250 p-[4px] mt-[200px]">
                        <MainPadding  isPicked text="BNB" imageString="/logo/logo.png" />
                        <MainPadding  text="BETS" imageString="/logo/logo.png" hasInfo />
                    </div>
                            )
                    }
                        <span className="uppercase text-white text-[13px] font-bold m-custom1">
                          eth
                        </span>
                        <div className="w-[20px] h-[20px] mt-[2px] text-accent-300">
                          <SiBinance />
                        </div>
                    </div>
                </div>
              </div>
              <MainMiddleTextComp />
              <div className="mt-12">
                <button type="button" disabled={true} className="rounded-xl border-2 border-accent-100 bg-transparent text-accent-100 text-[15px] font-semibold w-[450px] h-[50px]">
                    Connect your Wallet
                    </button>
              </div>
           </div>        
  )
}
