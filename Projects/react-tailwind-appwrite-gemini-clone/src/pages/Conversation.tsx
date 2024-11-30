import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
// Components
import PageTitle from '@/components/PageTitle';
import UserPrompt from '@/components/UserPrompt';
import AiResponse from '@/components/AiResponse';


function Conversation() {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};
  return (
    <>
      <PageTitle title={`Conversation title | Phoenix`} />
      <motion.div className=''>
        {chats.map((chat: any) => (
          <div key={chat.$id}>
            <UserPrompt text={chat.user_prompt} />
            {/* AI response */}
            <AiResponse aiResponse={chat.ai_response} />
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Conversation;
 