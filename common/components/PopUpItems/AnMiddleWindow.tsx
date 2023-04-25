import clsx from 'clsx'
import React from 'react'

interface WindowInterface{
  outerDiv: string,
  innerDiv: string,
  textColor: string,
  numberColor: string,
}

export default function AnMiddleWindow({outerDiv,innerDiv, textColor,numberColor}:WindowInterface) {
  return (
    <div className="h-[204px] px-[20px] py-[12px] bg-[rgba(76,82,139,.2)] rounded-[11px] text-[15px] font-bold">
                <div className={outerDiv}>
                  <div className={clsx(innerDiv,textColor)}>
                    <span>Players</span>
                  </div>
                  <div className={clsx(numberColor)}>
                    <span>131</span>
                  </div>
                </div>
                <div className={outerDiv}>
                  <div className={clsx(innerDiv,textColor)}>
                    <span>Bets</span>
                  </div>
                  <div className={clsx(innerDiv,numberColor)}>
                    <span>131</span>
                  </div>
                </div>
                <div className={outerDiv}>
                  <div className={clsx(innerDiv,textColor)}>
                    <span>Won Bets</span>
                  </div>
                  <div className={clsx(innerDiv,numberColor)}>
                    <span>131</span>
                  </div>
                </div>
                <div className={clsx(outerDiv)}>
                  <div className={clsx(innerDiv,textColor)}>
                    <span>Wagered amount</span>
                  </div>
                  <div className={clsx(innerDiv,numberColor)}>
                    <span>131</span>
                  </div>
                </div>
                <div className={clsx(outerDiv)}>
                  <div className={clsx(innerDiv,textColor)}>
                    <span>Payout amount</span>
                  </div>
                  <div className={clsx(innerDiv,numberColor)}>
                    <span>131</span>
                  </div>
                </div>
              </div>
  )
}
