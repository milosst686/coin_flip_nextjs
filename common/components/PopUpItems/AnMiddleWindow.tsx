import React from 'react'

export default function AnMiddleWindow() {
  return (
    <div className="h-[204px] px-[20px] py-[12px] bg-[rgba(76,82,139,.2)] rounded-[11px] text-[15px] font-bold">
                <div className="h-[36px] flex items-center">
                  <div className="h-[18px] w-1/2 text-font-100 flex items-center">
                    <span>Players</span>
                  </div>
                  <div className="h-[18px] w-1/2 text-font-150 text-right flex items-center justify-end">
                    <span>131</span>
                  </div>
                </div>
                <div className="h-[36px] flex items-center">
                  <div className="h-[18px] w-1/2 text-font-100 flex items-center">
                    <span>Bets</span>
                  </div>
                  <div className="h-[18px] w-1/2 text-font-150  flex items-center justify-end">
                    <span>131</span>
                  </div>
                </div>
                <div className="h-[36px] flex items-center">
                  <div className="h-[18px] w-1/2 text-font-100">
                    <span>Won Bets</span>
                  </div>
                  <div className="h-[18px] w-1/2 text-font-150 text-right flex items-center justify-end">
                    <span>131</span>
                  </div>
                </div>
                <div className="h-[36px] flex items-center ">
                  <div className="h-[18px] w-1/2 text-font-100">
                    <span>Wagered amount</span>
                  </div>
                  <div className="h-[18px] w-1/2 text-font-150 text-right">
                    <span>131</span>
                  </div>
                </div>
                <div className="h-[36px] flex items-center">
                  <div className="h-[18px] w-1/2 text-font-100">
                    <span>Payout amount</span>
                  </div>
                  <div className="h-[18px] w-1/2 text-font-150 text-right">
                    <span>131</span>
                  </div>
                </div>
              </div>
  )
}
