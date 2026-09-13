// npm i openai

import OpenAI from 'openai'
import "dotenv/config"

const messages=[
    {
        role:'system',
        content:'You are a helpful general knowledge expert.'
    },
    {
        role:'user',
        content:'what the unit of resistance?'
    }
]
const openai= new OpenAI({
    apiKey:process.env.key,
    baseURL: "https://openrouter.ai/api/v1"
})

const response=await openai.chat.completions.create({
    model: "openrouter/free",
    messages:messages
})

console.log(response.choices[0].message.content);