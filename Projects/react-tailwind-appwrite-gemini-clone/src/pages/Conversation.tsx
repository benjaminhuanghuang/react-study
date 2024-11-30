import { useLoaderData, useLocation} from 'react-router-dom';
import { motion } from 'framer-motion';
// Components
import PageTitle from '@/components/PageTitle';
import UserPrompt from '@/components/UserPrompt';
import AiResponse from '@/components/AiResponse';
import PromptPreloader from '@/components/PromptPreloader';
// Custom hooks
import { usePromptPreloader } from '@/hooks/usePromptPreloader';

function Conversation() {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};

  const { promptPreloaderValue } = usePromptPreloader();
  const location = useLocation();

  return (
    <>
      <PageTitle title={`${title}} | Phoenix`} />
      <motion.div
        className='max-w-[700px] !will-change-auto'
        initial={!location.state?._isRedirect &&{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
          delay: 0.05,
          ease: 'easeOut',
        }}
      >
        {chats.map((chat: any) => (
          <div key={chat.$id}>
            <UserPrompt text={chat.user_prompt} />
            {/* AI response */}
            <AiResponse aiResponse={chat.ai_response} />
          </div>
        ))}
      </motion.div>
      {promptPreloaderValue && (
        <PromptPreloader promptValue={promptPreloaderValue} />
      )}
    </>
  );
}

export default Conversation;
