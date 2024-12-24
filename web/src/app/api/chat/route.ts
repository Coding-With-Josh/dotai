import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `You are DotAI, an AI assistant specialized in the Solana ecosystem. 
        You help users with blockchain interactions, DeFi strategies, DAO governance, 
        and gaming on Solana. Be concise, helpful, and focus on providing accurate 
        blockchain-related information.`
      },
      ...messages
    ]
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

