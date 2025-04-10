import React from 'react'
import Row from './Row';
import { useState } from 'react';

export default function Semester( {number=0}) {

    const [rows, setRows] = useState([]);
  
    const [text, setText] = useState("");

    function addRow(){
        //trace
        console.log("adding rows")
        //
        let value = rows.length + 1;
        //console.log(value)
        setRows([...rows,<Row key={value} text={text}/>]);
        //
        console.log(rows)
    }




    function render(){
        console.log("trace")
        return rows.map((e, index) => {
            return (
                <li key={index}>
                    {e}
                </li>
            )
        })
    }

    function handleChange(event){
        setText(event.target.value);
        console.log(",,,")
        console.log(text);
    }

    const list = render();




  return (
    
    <div>
        <h3 className='text-2xl'>Semester {number}</h3>

        <form>
            <input type="text" className='bg-gray-100 border-2 m-4' onChange={(e)=>handleChange(e)}></input>
        </form>
        <button className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded' onClick={() =>{addRow(text)}}>Submit</button>

        <ul>
            {list}
        </ul>

    </div>
  )
}
