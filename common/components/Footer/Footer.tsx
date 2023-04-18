import React from 'react'
import FooterHistroryItem, { HistoryInterface } from './FooterHistroryItem'

export default function Footer() {
    //FooterHistoryItem components should be rendered as a list, not just via copy pasting them

    //Heres an example array to do it 

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
            won: "Won bet",
            choosen: "Heads",
            toPayOut: "83,848.05",
            hours: "about 12 houres ago"

        },
    ]

    //Now you can just itterate the array with betsHistory.map() and render all items

  return (
    <div className=" max-w-[100%] mx-5 pb-[40px] text-[14px] font-semibold">
        <table className="w-[100%] ">
            <thead className="border-b border-b-ui-400 text-white px-[8px] h-[60px]">
                <tr>
                    <th className="text-start w-[15%] min-w-[15%]">
                        sadsa
                    </th>
                    <th className="text-start w-[15%] min-w-[15%]">dasda</th>
                    <th className="text-start w-[15%] min-w-[15%]">dsad</th>
                    <th className="text-start w-[15%] min-w-[15%]">sda</th>
                    <th className="text-start w-[15%] min-w-[15%]">sda</th>
                </tr>
            </thead>
            <tbody className="w-[100%] text-font-150 ">
                {
                //This should be dynamic 
                }
                <FooterHistroryItem player="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="11,698.05" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="83,848.05" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1" won="Busted" choosen="Tails" toPayOut="0" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1" isWon won="Won bet" choosen="Tails" toPayOut="35,098.05" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="35,098.05" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="35,098.05" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="386,098.05" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1" won="Busted" choosen="Tails" toPayOut="0" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1"  won="Busted" choosen="Tails" toPayOut="0" hours="about 12 houres ago"  />
                <FooterHistroryItem player="0xe7E...E71c1"  won="Busted" choosen="Tails" toPayOut="0" hours="about 12 houres ago"  />
            </tbody>
        </table>
    </div>
  )
}
