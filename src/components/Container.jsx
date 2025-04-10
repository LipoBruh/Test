import React from 'react'
import { useState } from 'react'
import Semester from './Semester';

export default function Container() {
  
    const [semesters, setSemesters] = useState([]);
  
    function addSemester(){
        //trace
        console.log("adding semester")
        //
        let value = semesters.length + 1;
        //console.log(value)
        setSemesters([...semesters,<Semester key={value} number={value}/>]);
        //
        console.log(semesters)
    }

    function render(){
        console.log("trace")
        return semesters.map((semester, index) => {
            return (
                <div key={index}>
                    {semester}
                </div>
            )
        })
    }

    const list = render();

  
    return (
    <>
    <button 
        className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'
        onClick={() =>{addSemester()}}>
            Add semester
    </button>

    <p className='my-2'>Here you can find the plan for the project</p>
    <div>{list}</div>
    </>
  )
}
