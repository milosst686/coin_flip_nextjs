import React from 'react'
import MainHeader from './MainHeader';
import dynamic from "next/dynamic"

const MainMiddle = dynamic(
  () => import("@/common/components/MainSection/MainMiddle"),
  {
    ssr: false,
  },
)


export default function MainSection() {
  return (
        <div className="py-6 px-5">
          <div className="bg-background bg-opacity-20 bg-cover w-full h-[41vw] min-h-[650px] rounded-xl  flex flex-col items-center justify-center">
            <MainHeader/>
            <MainMiddle />
        </div>
        </div>
  )
}
 