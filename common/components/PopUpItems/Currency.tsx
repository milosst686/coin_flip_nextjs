import clsx from 'clsx'
import React from 'react'

interface ButtonInterface{
  button: string,
}

export default function Currency({button}:ButtonInterface) {
  return (
    <div className="mb-1 flex justify-center h-[55px]">
    <div className=" p-[12px]  w-full h-full flex justify-center">
        <div className="bg-back-250 py-[2px] px-1 flex items-center justify-evenly text-[11px] rounded-2xl w-[360px] text-ui-400 font-bold">
        <button className={clsx(button)}><span>MATIC</span></button>
        <button className={clsx(button, "bg-ui-300 text-font-150 rounded-full")} >BETS</button>
        <button className={clsx(button)}>jEUR</button>
        <button className={clsx(button)}>WETH</button>
        <button className={clsx(button)}>jMXN</button>
        <button className={clsx(button)}>PolyDodge</button>
        </div>
    </div>
    </div>
  )
}
