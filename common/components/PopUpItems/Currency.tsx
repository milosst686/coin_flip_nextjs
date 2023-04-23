import React from 'react'

export default function Currency() {
  return (
    <div className="mb-1 flex justify-center h-[55px]">
    <div className=" p-[12px]  w-full h-full flex justify-center">
        <div className="bg-back-250 py-[2px] px-1 flex items-center justify-evenly text-[11px] rounded-2xl w-[360px] text-ui-400 font-bold">
        <button className="py-[7px] px-[12px] h-[26px] flex items-center"><span>MATIC</span></button>
        <button className="py-[7px] px-[12px] h-[26px] flex items-center bg-ui-300 text-font-150 rounded-full">BETS</button>
        <button className="py-[7px] px-[12px] h-[26px] flex items-center">jEUR</button>
        <button className="py-[7px] px-[12px] h-[26px] flex items-center">WETH</button>
        <button className="py-[7px] px-[12px] h-[26px] flex items-center">jMXN</button>
        <button className="py-[7px] px-[12px] h-[26px] flex items-center">PolyDodge</button>
        </div>
    </div>
    </div>
  )
}
