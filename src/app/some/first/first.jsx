"use client";
import { useEffect } from 'react';
import Second, { functionSecond } from '@/app/some/first/second/second'


export const functionOne = () => {

    console.log("fun one")

}


const First = () => {


    useEffect(() => {

        functionSecond()

    }, [])


    return (


        <div className="bg-[#2e2e2ebd] w-full p-3 rounded-lg">

            first
           
              
           
            <Second />

        </div>


    )
}

export default First