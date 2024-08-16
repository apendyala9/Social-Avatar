
import { useState, useEffect } from 'react'

export const  About = () => {


    const [result, setResult] = useState({});

    const fetchDataAbout = async () => {
          
        const response = await fetch('http://127.0.0.1:5000/About')
        const jsonResponse = await response.json()
  
        setResult(jsonResponse)
        
    }

    useEffect(()=>  {
        
        fetchDataAbout()
  
    }, []);

   
      return (
  
        <>

        <code>{JSON.stringify(result)}</code>


        <h1>First Full Stack Project of Mines</h1>


        <p>Always loved going on Youtube, so I wanted my first full stack application to be revolved around it.</p>
        
        <p> So I decided to make a variation of a website known as "Social Blade" which you can find statistics about Youtubers and Content Creators</p>

        </>

    )



} 