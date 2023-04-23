import React from 'react'
import AnalyticHistoryItem from './AnalyticHistoryItem'
import {HiArrowNarrowDown} from 'react-icons/hi'

export default function AnalyticHistory() {
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
      <AnalyticHistoryItem num={1} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={2} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={3} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={4} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={5} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={6} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={7} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={8} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={9} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={10} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={11} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={12} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={13} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={14} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={15} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={16} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={17} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={18} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={19} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
      <AnalyticHistoryItem num={20} player="0x743...7302f" logoImg="/logo/Polygon.png" wageredAmount={97351.3252} numBets={1057}/>
    </div>
  )
}
