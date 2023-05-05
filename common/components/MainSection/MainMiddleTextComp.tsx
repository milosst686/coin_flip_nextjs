import React from 'react';
import {IoMdInformationCircleOutline} from 'react-icons/io';

interface MainTextInterface{
    bal: string,
    amount: string
}

export default function MainMiddleTextComp({bal, amount}:MainTextInterface) {
  return (

    <div className="w-full flex justify-center">
        <div className="flex w-full justify-between mt-3 font-bold lg:text-[12px] text-[10px] text-font-400 ">
              <div>
                    <div >
                        <span>50%</span>
                        <span > win chance </span>
                        <span>3% house edge</span>
                    </div>

                    <div className="mt-2">

                        <span>Bank: </span>
                        <span>{bal} ETH</span>
                    </div>
                </div>
                <div className="text-end">

                    <div className="lg:flex gap-x-1 justify-end">
                        <span>Target payout: </span>
                        <span> ~{Number(amount) * 1.94} ETH</span>
                        <IoMdInformationCircleOutline  className="text-accent-300 text-sm mt-[2px]"/>
                    </div>
                    <div className="mt-2">

                        <span>Max payouts: </span>
                        <span>37,965.3165 MATIC</span>
                    </div>
                </div>
              </div>
    </div>
  )
}
