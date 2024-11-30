import React from 'react'

// Components
import UserPrompt from './UserPrompt'
import AiResponse from './AiResponse'
import Skeleton from './Skeleton'


interface PromptPreloaderProps {
    promptValue: string;
}

function PromptPreloader({promptValue}: PromptPreloaderProps) {
  return (
    <div className='max-w[700] mx-auto'>
        <UserPrompt text={promptValue} />
        <AiResponse aiResponse=''>
            <Skeleton />
        </AiResponse>
    </div>
  )
}

export default PromptPreloader   