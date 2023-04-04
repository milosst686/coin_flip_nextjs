import clsx from 'clsx';
import React from 'react'

interface HistoryInterface{
    palyer: string;
    isWon: boolean;
    won: string;
    choosen: string;
    toPayOut: string;
    houres: string;
}

export default function FooterHistroryItem({palyer,isWon,won,choosen,toPayOut,houres}:HistoryInterface) {
  return (
    <tr className="h-[48px] border-b border-b-ui-400">
        <td className="px-[8px]">
            <span className="flex items-center  gap-x-[4px]">
                <div className={clsx("rounded-full", isWon? "bg-green-500 w-[9px] h-[9px]" : "bg-red-500 w-[9px] h-[9px]")}></div>
                <p className="text-font-200">{won}</p>
            </span>
        </td>
        <td className="px-[8px]">
            <span>
            {palyer}
            </span>
        </td>
        <td className="px-[8px]">
            <span >
                1.95x
            </span>
        </td>
        <td className="px-[8px]">
            <span>
            {choosen}
            </span>
        </td>
        <td className="px-[8px]">
            <span>
            {toPayOut}
            </span>
        </td>
        <td className="px-[8px] text-end">
            <span>
                {houres}
            </span>
        </td>
    </tr>
  )
}
