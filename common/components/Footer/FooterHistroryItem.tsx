import clsx from 'clsx';
import Image from 'next/image';
import React from 'react'

export interface HistoryInterface{
    player: string;
    isWon?: boolean;
    won: string;
    choosen: string;
    toPayOut: string;
    hours: string;
}

export default function FooterHistroryItem({player,isWon,won,choosen,toPayOut,hours}:HistoryInterface) {
  return (
    <tr className="h-[48px] border-b border-b-ui-400 ">
        <td className="px-[8px]" >
            <span className="flex items-center  gap-x-[4px]">
                <div className={clsx("rounded-full", isWon? "bg-green-500 w-[9px] h-[9px]" : "bg-red-500 w-[9px] h-[9px]")}></div>
                <p className="text-font-200">{won}</p>
            </span>
        </td>
        <td className="px-[8px]" >
            <span>
            {player}
            </span>
        </td>
        <td className="px-[8px]" >
            <span >
                1.95x
            </span>
        </td>
        <td className="px-[8px]" >
            <span>
            {choosen}
            </span>
        </td>
        <td className="px-[8px]" >
            <div className="flex items-center gap-x-2">
            <Image src="/logo/Binance.png" alt="" width={14} height={14}/>
            <span>
            {toPayOut}
            </span>
            </div>
        </td>
        <td className="text-end">
            <span>
                {hours}
            </span>
        </td>
    </tr>
  )
}
