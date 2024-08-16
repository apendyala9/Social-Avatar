import './HomePage.css'
import {useState } from 'react';


export const HomePage = () => {

    const [input, setInput] = useState("")

    const fetchDataAbout = async () => {
       
        const response = await fetch('http://127.0.0.1:5000/about')
        const jsonResponse = await response.json()

        return jsonResponse

}


    return( <>
    

        
        <nav className = "topnav">

            {/* Here we title for and link is for the home page */}
            <a href='/' className='title'>Social Avatar</a>


            <div className='titleAndNav'>

                <ul>

                    {/* Create a navigation bar at the top with these links and title */}
                <li> <a href='/About'>About</a> </li>
                <li> <a href='/Secret'>Secret</a> </li>
                



                </ul>

                {/* value={input} sets the value of the state variable to whatever was inputted */}
                {/* onChange={(e) => setInput(e.target.value) eventHandler that triggers whenever input field is activated  */}

                <input placeholder="Type to Search Youtuber" value={input} onChange={(e) => setInput(e.target.value)}></input>

            </div>
                
            
            

        </nav>
    
    
    </>);



};
