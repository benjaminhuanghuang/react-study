import React from 'react';
// Assets
import { iconLogo } from '@/assets/assets';

interface AiResponseProps {
  aiResponse: string;
  children?: React.ReactNode;
}
const AiResponse = ({ aiResponse, children }: AiResponseProps) => {
  return (
    <div
      className='grid grid-cols-1 items-start gap-1 py-4 
    md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'
    >
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src={iconLogo}
          alt='Phoenix logo'
          width={32}
          height={32}
        />
      </figure>
      {children}
      <div className='markdown-content'>{aiResponse}</div>
    </div>
  );
};

export default AiResponse;
