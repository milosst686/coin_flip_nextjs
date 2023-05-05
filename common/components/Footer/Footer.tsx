import React from 'react'
import FooterHistroryItem, { HistoryInterface } from './FooterHistroryItem'
import { usePastEvents } from '@/common/query/queries'
import { toEther } from '../MainSection/MainMiddle'

export default function Footer() {
   
     const walletCutter = (wallet: string) => {
        return `${wallet.slice(0, 5)}...${wallet.slice(-5)}`
      }

    const { data: pastEvents } = usePastEvents()

    function timeSince(date: Date) {

        //@ts-ignore
        var seconds = Math.floor(Number(new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
      }

  return (
    <div className=" max-w-[100%] mx-5 pb-[40px] text-[14px] font-semibold">
        <table className="w-[100%] ">
            <thead className="border-b border-b-ui-400 text-white px-[8px] h-[60px]">
                <tr>
                <th className="text-start w-[15%] min-w-[15%] px-[8px]">
                        All
                    </th>
                    <th className="text-start w-[10%] px-[8px]">Player</th>
                    <th className="text-start w-[15%] px-[8px]">Target</th>                  
                    <th className="text-start w-[10%] px-[8px]">Rolled</th>
                    <th className="text-start px-[8px]">Payout</th>
                    <th className="flex justify-end items-center h-[60px]  ">
                    <span>Time</span>
                    </th>
                </tr>
            </thead>

            <tbody className="w-[100%] text-font-150 ">
                {
                pastEvents?.map((e, index) => <FooterHistroryItem player={walletCutter(e.returnValues.player)} isWon={Boolean(Number(e.returnValues.amountWon) 
                    > 0)} choosen={e.returnValues.playerChoice}
                 toPayOut={toEther(e.returnValues.amountWon)} hours={timeSince(new Date(e.returnValues.timeStamp * 1000))} key={index}/>)
                }

            </tbody>
        </table>
        <div>
    
        </div>
    </div>
  )
}
