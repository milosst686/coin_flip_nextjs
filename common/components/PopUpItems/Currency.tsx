import clsx from 'clsx'
import React from 'react'
import CurrencyButton from './CurrencyButton'



export default function Currency() {
  return (
    <div className="mb-1 flex justify-center h-[55px]">
    <div className=" p-[12px]  w-full h-full flex justify-center">
        <div className="bg-back-250 py-[2px] px-1 flex items-center justify-evenly text-[11px] rounded-2xl w-[360px] text-ui-400 font-bold">
        <CurrencyButton text="MATIC"/>
        <CurrencyButton text="BETS" className="bg-ui-300 text-font-150 rounded-full"/>
        <CurrencyButton text="jEUR"/>
        <CurrencyButton text="WETH"/>
        <CurrencyButton text="jMXN"/>
        <CurrencyButton text="PolyDodge"/>

        </div>
    </div>
    </div>
  )
}
