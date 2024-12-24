import { type Message } from 'ai'
import { Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Markdown from 'react-markdown'

export function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={cn('flex items-start space-x-4', message.role === 'assistant' && 'justify-start', message.role === 'user' && 'justify-end')}>
      {message.role === 'assistant' && (
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
          <AvatarImage src="/bot-avatar.png" />
        </Avatar>
      )}
      <Card className={cn('max-w-[80%] p-4', message.role === 'assistant' ? 'bg-muted' : 'bg-primary text-primary-foreground')}>
        <Markdown className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0">
          {message.content}
        </Markdown>
      </Card>
      {message.role === 'user' && (
        <Avatar>
          <AvatarFallback>U</AvatarFallback>
          <AvatarImage src="/placeholder.svg" />
        </Avatar>
      )}
    </div>
  )
}

