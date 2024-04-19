'use client'
import React, { useState, useEffect } from 'react'
import Four, { functionFour } from '@/app/some/first/second/three/four/four'

export const functionThree = () => {

    console.log("fun three")
    
}

const Three = ( { sendDataToParent } ) => {
    const [value,setValue] = useState();
    const [userInfo,setUserInfo] = useState();

    useEffect(() => {
     
        functionThree()

    },[])

    function checkValue(dv) {
       
        
       if (dv) 

       {

            const ldv = dv.replace(/\s/g, '');
            
            if (ldv)
            
            {

                setValue(ldv)

            } else
            
            {

                console.log("Value Contains Space Only")

            }

           
        } else
        
        {
            setValue('')
            console.log("Fill Input")

        }

    }

  async function getUserInfo() {
    setUserInfo('')

    if(value) {
       try 
       
       {


        const response = await fetch('/api/userInfo', {
        
            method: 'POST',
        
            headers: {
        
                'Content-Type': 'application/json'
        
            },
        
            body: JSON.stringify({ data: value }),

        })
        
        if (response.ok) { 
            const data = await response.json();
            setValue('')
            sendDataToParent(data?.result?.user?.profile_pic_url)
            setUserInfo(data?.result?.user)
            console.log(data);
        } else { 
            console.error('Failed to send data');
        }

       } 
       
       catch 
       
       {
          console.log(error)
       }
    } else {
        console.log("Fill Input Please")
    }

    }

  return (

    <div className="bg-[#4e4e4ebd] break-words w-full p-4 my-1 rounded-lg flex flex-col">
    
        three
        
        <input 
        className='rounded-lg p-3 bg-[#ffffff82]' 
        type="text"
        autoComplete='off'
        onChange={(e) => {checkValue(e.target.value)}}
        />

        <button 
        type="button" 
        onClick={getUserInfo}
        class="my-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-3.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
        Search
        </button>
        
        <Four sendInfo={userInfo}/>

        <div className="p-1">
            {userInfo ? ("") : (value ? (`You Search : ${value}`) : (<>Nothing To Search</>))}
            {/* {userInfo ? (JSON.stringify(userInfo)) : ("")} */}
        </div>


    </div>

  )
}

export default Three