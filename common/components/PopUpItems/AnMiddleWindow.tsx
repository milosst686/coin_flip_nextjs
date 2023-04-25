import clsx from 'clsx'
import React from 'react'
import MiddleWindowItem from './MiddleWindowItem'

export default function AnMiddleWindow() {
  return (
    <div className="h-[204px] px-[20px] py-[12px] bg-[rgba(76,82,139,.2)] rounded-[11px] text-[15px] font-bold">
            
                <MiddleWindowItem category="Players" number="131" />
                <MiddleWindowItem category="Bets" number="131" />
                <MiddleWindowItem category="Won Bets" number="131" />
                <MiddleWindowItem category="Wagered amount" number="131" />
                <MiddleWindowItem category="Payout amount" number="131" />
                
              </div>
  )
}
