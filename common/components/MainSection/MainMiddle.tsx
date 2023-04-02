import React from 'react';
import {RiArrowDownSFill} from 'react-icons/ri';
import {IoMdInformationCircleOutline} from 'react-icons/io';

export default function MainMiddle() {
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
                <input type="text" value={0} className="bg-ui-300 text-white text-xl mx-[20px] w-1/2 " />
                <button className="lowercase bg-ui-400 text-font-400 rounded-xl m-[14px] h-[28px] w-[50px] ">max</button>
                </div>
                <div className="bg-ui-300 rounded-r-xl w-[150px] flex items-center justify-center ">
                    <div className="flex items-center">
                        <RiArrowDownSFill className="text-font-400 text-2xl"/>
                        <span className="uppercase text-white text-[13px] font-bold m-custom1">
                          ETH
                        </span>
                        <div className="w-[14px] h-[14px] bg-slate-400 rounded-md mb-[-1px]">
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex w-1/3 justify-between mt-3 font-medium px-3">
                <div className="">
                    <div className="text-font-400 text-[10px]">
                        <span>50%</span>
                        <span className="mr-2">win chance</span>
                        <span>3% house edge</span>
                    </div>
                    <div className="text-font-400 text-[10px] mt-2">
                        <span>Bank: </span>
                        <span>37,965.3165 MATIC</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="flex text-font-400 text-[10px]">
                        <span>Target payout: </span>
                        <span>~0 MATIC</span>
                        <IoMdInformationCircleOutline  className="text-accent-250"/>
                    </div>
                    <div className="text-font-400 text-[10px] mt-2">
                        <span>Bank: </span>
                        <span>37,965.3165 MATIC</span>
                    </div>
                </div>
              </div>
              <div className="mt-12">
                <button type="button" disabled={true} className="rounded-xl border-2 border-accent-100 bg-transparent text-accent-100 text-[15px] font-semibold w-[450px] h-[50px]">
                    Connect your Wallet
                    </button>
              </div>
           </div>        
  )
}
