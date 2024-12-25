'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Bot, Mic, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import ChatMessage from '@/components/ai/chat/chat-message'
import VoiceInput from '@/components/ai/chat/voice-input'

export default function ChatPage() {
  const [voiceMode, setVoiceMode] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="container flex h-[calc(100vh-3.5rem)] flex-col gap-4 p-4 md:p-8">
      <Card className="flex flex-1 flex-col">
        <ScrollArea className="flex-1 p-4">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4">
              <Bot className="h-12 w-12 text-muted-foreground" />
              <h2 className="text-lg font-semibold">Welcome to DotAI</h2>
              <p className="text-center text-muted-foreground">
                Your personal AI assistant for the Solana ecosystem. Ask me anything!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          )}
        </ScrollArea>
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            {voiceMode ? (
              <VoiceInput onResult={handleInputChange} />
            ) : (
              <Input
                placeholder="Ask DotAI anything..."
                value={input}
                onChange={handleInputChange}
              />
            )}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setVoiceMode(!voiceMode)}
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}

