'use client'
import React, { useEffect,useState } from 'react'
import Three, { functionThree } from '@/app/some/first/second/three/three'

export const functionSecond = () => {
    
        console.log("fun two")
    
}

const Second = () => {
    const [dataFromChild, setDataFromChild] = useState('')
    let url = dataFromChild.replaceAll(/:/g, "%3A").replaceAll(/\//g, "%2F").replaceAll(/&/g, "%26");

    useEffect(() => {
     
        functionThree()

    },[])

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
      };
  return (
    <>
    

        <div className="bg-[#3e3e3ebd] break-words w-full p-3 my-1 rounded-lg">
           
           second
           {/* <p>Image Url: {dataFromChild}</p> */}
           <div className="w-fuul flex justify-center p-2 w-full h-auto">
            <img className='rounded-lg' src={`https://api.codetabs.com/v1/proxy/?quest=${url}`} alt="" />
           </div>

           <Three sendDataToParent={handleDataFromChild}/>
        </div>
    

    </>
  )
}

export default Second