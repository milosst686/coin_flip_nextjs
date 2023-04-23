import React from 'react'

interface AnalyticHistoryInterface{
    num: number;
    player: string;
    logoImg: string;
    wageredAmount: number;
    numBets: number;
}

    export default function AnalyticHistoryItem({num,player,logoImg,wageredAmount, numBets}:AnalyticHistoryInterface) {
  return (
    <div className=" flex flex-row  items-center text-[14px] text-font-150 w-[100%] h-[48px] hover:bg-ui-100">
    <div className="px-[8px] border-b-[0.8px] border-b-ui-300 flex items-center w-[150px] h-full">
      <span className="mr-[5px]">{num}</span>
      <a href="" target='_blank' className="text-[18px]">{player}</a>
    </div>
    <div className="px-[8px] border-b-[0.8px] border-b-ui-300 flex items-center w-[245px] h-full gap-x-1">
        <img src={logoImg} alt="" width={14} height={14} />
      <span>{wageredAmount}</span>
    </div>
    <div className="px-[8px] border-b-[0.8px] border-b-ui-300 flex items-center w-[128px] h-full">
      <span >{numBets}</span>
    </div>
  </div>
  )
}
