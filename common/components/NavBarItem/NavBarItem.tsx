import clsx from 'clsx';
import React from 'react';

interface NavBarInterface{
    text: string;
    isActive?: boolean;
    isSoon?: boolean;
}

export default function NavBarItem({text,isActive,isSoon}:NavBarInterface ) {
  

  return (
  <div className={clsx("px-[12px] mt-[3px] cursor-default h-[36px] text-[14px] font-semibold flex items-center", isActive && "bg-back-200 rounded-full")}>
    <div className={clsx("flex items-center ", (!isSoon&&!isActive)&& " hover:bg-back-100 rounded-full ")}>
      <div className={clsx("h-[19px] w-[19px] rounded-full mr-[10px] ", isActive ? "bg-accent-200" : "bg-ui-100")}> </div>
     <div className="flex items-center ">
     <p className={clsx("w-[140px]",isActive ? "text-accent-200" : isSoon ? "text-font-200" : "text-white cursor-pointer")}>{text}</p>
      <button className= {clsx("p-[4px] h-[16px] w-[42px] text-[11px] flex justify-center items-center",isSoon? " rounded-[14px] bg-ui-200 w-[] text-font-200 " : "hidden")}>
        <span>
        Soon
        </span>
        </button>    
      </div> 
    </div>
  </div>
  )
}
