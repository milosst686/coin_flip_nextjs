import React, { useState } from 'react'
import Currency from './Currency'
import AnMiddleWindow from './AnMiddleWindow'
import AnalyticHistory from './AnalyticHistory'

export default function Analytics() {
  return (
    <div className="w-full h-screen bg-opacity-90 bg-back-200 flex items-center justify-center left-0 top-0 right-0 bottom-0 fixed">
        <div className="lg:w-[40%] w-[95%] h-[90%] lg:m-[24px] m-[12px] bg-back-100">
        <div className=" h-full bg-[rgba(54,57,99,.5)] opacity-100 lg:rounded-[14px] rounded-[20px] overflow-y-scroll ">
          <div className="lg:h-[96px] h-[60px] w-full lg:px-[40px] px-[20px] flex items-center justify-between">
            <div>
              <span className=" text-font-150 font-bold text-[20px] flex items-center">
                Coin Toss - Analytics
              </span>
            </div>
            <div className="rounded-full uppercase hover:bg-ui-400 w-[48px] h-[50px] text-[18px] font-bold text-font-150 flex items-center justify-center">
              <span className="w-[48px] h-[24px] text-center mt-0">
              x
              </span>
            </div>
          </div>
          <div className="lg:px-[40px] px-[20px] lg:pb-[40px] pb-[20px]">
          <div className="w-[100%] h-auto">
                <Currency />
              <AnMiddleWindow />
          </div>
             <div className="p-[12px] w-full ">
              <div className="h-[52px] w-[520] text-font-100 flex items-center font-bold">
                <div className="mt-[32px]  h-[20px] w-full">
                  Leaderbord
                </div>
              </div>
             </div>
             <AnalyticHistory />
        </div>
        </div>
        </div>
        
    </div>
  )
}
