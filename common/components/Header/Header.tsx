import React from 'react'

export default function Header() {
  return (
         <div className=" w-full pl-4">
      <div className="flex justify-between pt-5">
        <div>
        <button className=" py-2 uppercase rounded-full border-font-100 border-2 w-32">
          <span className="text-font-100 text-sm"> Swap $Coins</span>  
        </button>
        </div>
        <div className="flex items-center pr-12 gap-x-4 ">
          <span className="rounded-full bg-ui-100 text-white px-5 ">sdadasd</span>
          <span className="rounded-full bg-ui-100 text-white px-2">sdadasd</span>
          <button className="rounded-full bg-accent-200 px-2 text-white">Connect wallet</button>
        </div>
      </div>
       </div>
  )
}
