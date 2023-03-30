import React from 'react'

interface NavBarInterface{
    text: string;
    isActive?: boolean;
    isSoon?: boolean;
}

export default function NavBarItem({text,isActive,isSoon}:NavBarInterface ) {
  

  return (
    <div>NavBarItem</div>
  )
}
