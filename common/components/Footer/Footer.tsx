import React from 'react'
import FooterHistroryItem from './FooterHistroryItem'

export default function Footer() {
  return (
    <div className=" max-w-[100%] mx-5 pb-[40px]">
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
            <tbody className="w-[100%] text-white">
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="11,698.05" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="83,848.05" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon={false} won="Busted" choosen="Tails" toPayOut="0" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon won="Won bet" choosen="Tails" toPayOut="35,098.05" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="35,098.05" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="35,098.05" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon won="Won bet" choosen="Heads" toPayOut="386,098.05" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon={false} won="Busted" choosen="Tails" toPayOut="0" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon={false} won="Busted" choosen="Tails" toPayOut="0" houres="about 12 houres ago"  />
                <FooterHistroryItem palyer="0xe7E...E71c1" isWon={false} won="Busted" choosen="Tails" toPayOut="0" houres="about 12 houres ago"  />
            </tbody>
        </table>
        <div>
    
        </div>
    </div>
  )
}
