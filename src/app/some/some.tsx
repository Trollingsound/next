"use client";
import { useEffect } from 'react';
import First, {functionOne} from '@/app/some/first/first'

const SomePage = () => {


    useEffect(() => {
      

      functionOne()

    } ,[])


  return (
    <>


      <div className="bg-[#1a1a1ae3] w-full max-w-[600px] mx-auto md:my-4 p-3 rounded-lg">

          some page

          <First />

      </div>


    </>);
};

export default SomePage;
