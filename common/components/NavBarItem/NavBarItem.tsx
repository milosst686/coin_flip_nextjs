import clsx from 'clsx';
import React from 'react';

interface NavBarInterface{
    text: string;
    isActive?: boolean;
    isSoon?: boolean;
}

export default function NavBarItem({text,isActive,isSoon}:NavBarInterface ) {
  

  return (
  <div className={clsx("cursor-default h-[36px]  text-[14px] mt-[3px] font-semibold flex items-center", isActive && "bg-back-200 rounded-full")}>
    <div className={clsx("flex items-center h-full w-full px-[6px]", (!isSoon && !isActive)&& " hover:bg-back-100 rounded-full ")}>
      <div className={clsx("h-[19px] w-[19px] rounded-full mr-[10px] ", isActive ? "bg-accent-300" : "bg-ui-100")}> </div>
     <div className="flex items-center gap-x-3 ">
     <p className={clsx("w-[140px]",isActive ? "text-accent-300" : isSoon ? "text-font-200" : "text-white cursor-pointer")}>{text}</p>
      <button className= {clsx(" h-[16px] w-[42px] text-[11px] flex justify-center items-center",isSoon? " rounded-[14px] bg-ui-200 text-font-200 " : "hidden")}>
        <span>
        Soon
        </span>
        </button>    
      </div> 
    </div>
  </div>
  )
}
