import React,{useState} from 'react'
import {functionThree} from '@/app/some/first/second/three/three'

export const functionFour = () => {

    console.log("fun four")
    
}

const Four = ({sendInfo}) => {
    const [showInfo,setShowInfo] = useState(false);
    let data = sendInfo;
    
  return (
    <>
    <div className="bg-[#5e5e5ebd] break-words w-full p-4 my-1 rounded-lg flex flex-col">
      {console.log(sendInfo)}
      {sendInfo ? (
      <>
        <p> Follower count : {sendInfo?.follower_count}</p>
        <p> Following Count : {sendInfo?.following_count}</p>
        <p> Full Name : {sendInfo?.full_name}</p>
        <p> User Name : {sendInfo?.username}</p>
        <p> Biography : {sendInfo?.biography}</p>
      </>) : (<>No User</>)}
      
      {sendInfo ? (
      <>
        <button 
          type="button" 
          onClick={() => {
            if(showInfo == false) {
              setShowInfo(true)
            } else if(showInfo == true) {
              setShowInfo(false)
            }
          }}
          class="my-4 flex items-center justify-center space-x-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-3.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            {showInfo ? (<p> Hide Raw Data </p>) : (<p> Show Raw Data </p>)}
            
          <img className='w-[2rem h-[2rem]' src="https://img.icons8.com/?size=256&id=40036&format=png" alt="" srcset="" />
        </button>

      </>) : ("")}

      

        {showInfo ? (JSON.stringify(sendInfo)) : ("")}
    </div>
    </>
  )
}

export default Four