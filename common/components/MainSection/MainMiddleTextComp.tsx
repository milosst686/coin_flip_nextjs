import React from 'react';
import {IoMdInformationCircleOutline} from 'react-icons/io';

export default function MainMiddleTextComp() {
  return (
    <div className="flex w-1/3 justify-between mt-3 font-medium px-3">
              <div>
                    <div className="text-font-400 text-[10px] gap-x-2">
                        <span>50%</span>
                        <span > win chance </span>
                        <span>3% house edge</span>
                    </div>
                    <div className="text-font-400 text-[10px] mt-2">
                        <span>Bank: </span>
                        <span>37,965.3165 MATIC</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="flex text-font-400 text-[10px] gap-x-1">
                        <span>Target payout: </span>
                        <span> ~0 MATIC</span>
                        <IoMdInformationCircleOutline  className="text-accent-300 text-sm mt-1"/>
                    </div>
                    <div className="text-font-400 text-[10px] mt-2">
                        <span>Bank: </span>
                        <span>37,965.3165 MATIC</span>
                    </div>
                </div>
              </div>
  )
}
