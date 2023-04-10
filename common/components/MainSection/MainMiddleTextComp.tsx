import React from 'react';
import {IoMdInformationCircleOutline} from 'react-icons/io';

export default function MainMiddleTextComp() {
  return (
    <div className="flex justify-between mt-3 font-medium  gap-x-5">
              <div>
                    <div className="text-font-400 text-[13px]">
                        <span>50%</span>
                        <span className="mr-2"> win chance</span>
                        <span>3% house edge</span>
                    </div>
                    <div className="text-font-400 text-[13px] mt-2">
                        <span>Bank: </span>
                        <span>37,965.3165 MATIC</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="flex text-font-400 text-[13px] ">
                        <span>Target payout: </span>
                        <span> ~0 MATIC</span>
                        <IoMdInformationCircleOutline  className="text-accent-250 text-sm mt-1"/>
                    </div>
                    <div className="text-font-400 text-[13px] mt-2">
                        <span>Bank: </span>
                        <span>37,965.3165 MATIC</span>
                    </div>
                </div>
              </div>
  )
}
