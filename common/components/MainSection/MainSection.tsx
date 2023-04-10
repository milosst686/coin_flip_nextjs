import React from 'react'
import MainHeader from './MainHeader';
import MainMiddle from './MainMiddle';


export default function MainSection() {
  return (
        <div className="py-4 px-5">
          <div className="bg-background bg-opacity-10 bg-cover lg:bg-[length:100%_650px] w-[100%] h-[600px] rounded-xl fill-current">
            <MainHeader />
            <MainMiddle />
        </div>
        </div>
  )
}
