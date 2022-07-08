import Image from "next/image"
import { useState } from "react"

const ImageScrollbar = ({photos}:any) => {
  let img = ['https://bayut-production.s3.eu-central-1.amazonaws.com/image/170467622/a3e04659a90647ed8a0891011d82e24d','https://bayut-production.s3.eu-central-1.amazonaws.com/image/170467622/a3e04659a90647ed8a0891011d82e24d','https://bayut-production.s3.eu-central-1.amazonaws.com/image/170467622/a3e04659a90647ed8a0891011d82e24d','https://bayut-production.s3.eu-central-1.amazonaws.com/image/170467622/a3e04659a90647ed8a0891011d82e24d']

  return (
   <div className=" overflow-x-scroll h-[333px] flex">
    {img.map((e:any,i:any)=>{
     return (

     <Image className=" ring-2 object-cover w-[733px]" key={i}
     src={e} layout='fill' height={'200'} alt='img' />
     )
    })}
   </div>
  )
}
export default ImageScrollbar
