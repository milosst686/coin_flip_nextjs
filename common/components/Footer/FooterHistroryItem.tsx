import clsx from 'clsx';
import Image from 'next/image';
import React from 'react'

export interface HistoryInterface{
    player: string;
    isWon: boolean;
    choosen: string;
    toPayOut: string;
    hours: string;
}

export default function FooterHistroryItem({player,isWon,choosen,toPayOut,hours}:HistoryInterface) {
  return (
    <tr className="h-[48px] border-b border-b-ui-400 [&>*]:px-[8px]">
        <td >
            <span className="flex items-center gap-x-[4px]">
                <div className={clsx("rounded-full w-[9px] h-[9px]", isWon? "bg-green-500" : "bg-red-500")}></div>
                <p className="text-font-200"> {isWon ? "Won Bet" : "Busted"}</p>
            </span>
        </td>
        <td >
            <span>
            {player}
            </span>
        </td>
        <td >

            <span >
                1.95x
            </span>
        </td>
        <td >

            <span>
            {choosen}
            </span>
        </td>
        <td >
            <div className="flex items-center gap-x-2">
           
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
