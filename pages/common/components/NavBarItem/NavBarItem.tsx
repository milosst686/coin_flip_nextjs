import clsx from 'clsx';
import React from 'react';

interface NavBarInterface{
    text: string;
    isActive?: boolean;
    isSoon?: boolean;
}

export default function NavBarItem({text,isActive,isSoon}:NavBarInterface ) {
  

  return (
  <div className="py-1 px-2">
    <div className={clsx("flex items-center ", !isSoon && " hover:bg-back-100 rounded-full cursor-pointer")}>
      <div className={clsx("h-4 w-4 rounded-full mx-2 ", isActive ? "bg-accent-200" : "bg-ui-100")}> </div>
      <p className={clsx("flex-1",isActive ? "text-accent-200 mx-2" : isSoon ? "text-font-200 mx-2" : "text-white mx-2")}>{text}</p>
      <button className= {clsx(isSoon? " rounded-full bg-ui-200 w-12 text-font-200" : "hidden")}>Soon</button>     
    </div>
  </div>
  )
}
