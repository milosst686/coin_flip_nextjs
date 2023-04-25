import React from 'react'
import AnalyticHistoryItem, {AnalyticHistoryInterface} from './AnalyticHistoryItem'
import {HiArrowNarrowDown} from 'react-icons/hi'


export default function AnalyticHistory() {
  const analyticHistory: AnalyticHistoryInterface[] = [
    {num: "1.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "2.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "3.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "4.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "5.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "6.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "7.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "8.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "9.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "10.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "11.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "12.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "13.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "14.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "15.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "16.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "17.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "18.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "19.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
    {num: "20.", player: "0x743...7302f",logoImg: "/logo/Polygon.png",wageredAmount: 97351.3252,numBets: 1057,},
      
    
]

  return (
    <div className="p-[12px] ">
      {
      // Add maping for AHItems
      }
      <div className=" flex flex-row text-[14px] text-white w-full h-[60px]">
        <div className="px-[8px] border-b-[0.8px] border-b-ui-300 flex items-center w-[150px]">
          <span>Player</span>
        </div>
        <div className="px-[8px] border-b-[0.8px] border-b-ui-300 flex items-center w-[245px] gap-x-1">
          <span>Wagered</span>
          <HiArrowNarrowDown className="w-[15px] h-[15px] mt-[2px]"/>
        </div>
        <div className="px-[8px] border-b-[0.8px] border-b-ui-300 flex items-center w-[128px]">
          <span>Bets</span>
        </div>
      </div>
      {
                analyticHistory.map((e: AnalyticHistoryInterface) => <AnalyticHistoryItem num={e.num} player={e.player} logoImg={e.logoImg} 
                wageredAmount={e.wageredAmount} numBets={e.numBets} key={Date.now()}/>)
                }
    </div>
  )
}
