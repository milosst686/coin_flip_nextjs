import React from 'react'
import FooterHistroryItem, { HistoryInterface } from './FooterHistroryItem'

export default function Footer() {
    const betsHistory: HistoryInterface[] = [
        {
            player: "0xe7E...E71c1",
            isWon: true,
            won: "Won bet",
            choosen: "Heads",
            toPayOut: "11,698.05",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: true,
            won: "Won bet",
            choosen: "Heads",
            toPayOut: "83,848.05",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: false,
            won: "Busted",
            choosen: "Tails",
            toPayOut: "0",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: true,
            won: "Won bet",
            choosen: "Tails",
            toPayOut: "35,098.05",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: true,
            won: "Won bet",
            choosen: "Heads",
            toPayOut: "35,098.05",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: true,
            won: "Won bet",
            choosen: "Heads",
            toPayOut: "35,098.05",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: true,
            won: "Won bet",
            choosen: "Heads",
            toPayOut: "386,098.05",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: false,
            won: "Busted",
            choosen: "Tails",
            toPayOut: "83,848.05",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: false,
            won: "Busted",
            choosen: "Tails",
            toPayOut: "0",
            hours: "about 12 houres ago"

        },
        {
            player: "0xe7E...E71c1",
            isWon: false,
            won: "Busted",
            choosen: "Tails",
            toPayOut: "0",
            hours: "about 12 houres ago"

        },
        
    ]


  return (
    <div className=" mx-5 pb-[40px] text-[14px] font-semibold">
        <table className="w-full">
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
                betsHistory.map((e: HistoryInterface, index) => <FooterHistroryItem player={e.player} isWon={e.isWon} won={e.won} choosen={e.choosen}
                 toPayOut={e.toPayOut} hours={e.hours} key={index}/>)
                }

            </tbody>
        </table>
        <div>
    
        </div>
    </div>
  )
}
