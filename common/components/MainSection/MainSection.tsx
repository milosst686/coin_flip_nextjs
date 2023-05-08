import React from 'react'
import MainHeader from './MainHeader';
import MainMiddle from './MainMiddle';


export default function MainSection() {
  return (
        <div className="py-6 px-5 cursor-default">
          <div className="bg-background bg-opacity-20 bg-cover h-[650px] rounded-xl fill-current flex flex-col items-center">
            <MainHeader/>
            <MainMiddle choice/>
        </div>
        </div>
  )
}
 