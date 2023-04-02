import React from 'react'
import NavBarItem from './NavBarItem'
import Image from 'next/image'
import clsx from 'clsx'

export default function 
() {
  return (
       <div className={clsx(" bg-ui-300 h-screen w-[20%] shadow-black  shadow-2xl fixed ")}>
        <div className="flex items-center px-4 pt-4">
          <Image src="/logo/logotype.9180b64.svg" alt="/" width='45'height='45' />
          <p className=" pl-2 text-red-400 font-bold">BWS GAMES</p>
        </div>
        <div className="py-4 ">
          <h2 className="text-sm text-font-100 py-4 uppercase px-4">Games</h2>
            <div>
              <NavBarItem text="Dice"  isActive/>
              <NavBarItem text="Coin toss"  />
              <NavBarItem text="Rulette"  />
              <NavBarItem text="Keno"  isSoon/>
              <NavBarItem text="Toss battle"  isSoon/>
              <NavBarItem text="Rusian Rulette"  isSoon/>
            </div>
        </div>
        <div className="py-4">
          <h2 className="text-sm  text-font-100 py-4 uppercase px-4">protocol</h2>
            <div>
              <NavBarItem text="Analytics"  />
              <NavBarItem text="Leaderboard"  />
              <NavBarItem text="Dividends"  isSoon/>
            </div>
        </div>
       </div>
  )
}
