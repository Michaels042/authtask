import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Topnav from '../components/Navbar'
import "../App.css"

const CreateImage = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    
    const configuration = new Configuration({
        // apiKey: process.env.OPENAI_KEY, 
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration)
    const generateImage = async () => {
        setLoading(true)
        const response = await openai.createImage({
            prompt: prompt,  
            n: 1,
            size: "400X400",
        });
        console.log('response', response);
        setLoading(false)
        setResult(response.data.data[0].url);
    }
    return (
    <div>
         <Topnav />
        <h1>Create Image</h1>
        {loading ? (
            <h2> Image generation in progress . . .</h2>
        ): (<></>)}
        <div className='card'>
            <textarea
                className='text-input'
                placeholder='Enter a prompt'
                onChange={(e) => setPrompt(e.target.value)}
                row="5"
                cols="50"
            />
            <button className='button' onClick={generateImage}>Create Image</button>
            {result.length > 0 ? 
                (
                    <img className='result-image' src={result} alt="Create Image" />
                ) : (<></>)
            }
        </div>
    </div>
  )
}

export default CreateImage