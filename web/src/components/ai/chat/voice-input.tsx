'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Mic, MicOff } from 'lucide-react'

interface VoiceInputProps {
  onResult: (e: any) => void
}

export function VoiceInput({ onResult }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = true
      
      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('')
        
        onResult({ target: { value: transcript } })
      }

      setRecognition(recognition)
    }

    return () => {
      if (recognition) {
        recognition.stop()
      }
    }
  }, [onResult])

  const toggleListening = () => {
    if (isListening) {
      recognition?.stop()
    } else {
      recognition?.start()
    }
    setIsListening(!isListening)
  }

  return (
    <Button
      type="button"
      variant={isListening ? "destructive" : "default"}
      className="flex-1"
      onClick={toggleListening}
    >
      {isListening ? (
        <>
          <MicOff className="mr-2 h-4 w-4" />
          Stop Recording
        </>
      ) : (
        <>
          <Mic className="mr-2 h-4 w-4" />
          Start Recording
        </>
      )}
    </Button>
  )
}

