import React from 'react'
import MainHeader from './MainHeader';
import MainMiddle from './MainMiddle';


export default function () {
  return (
        <div className="py-6 px-16">
          <div className="bg-background bg-opacity-20 bg-cover w-[100%] h-[650px] rounded-xl fill-current">
            <MainHeader />
            <MainMiddle />
        </div>
        </div>
  )
}
