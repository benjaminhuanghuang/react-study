import { useLoaderData, Link, useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';
// Components
import PageTitle from '@/components/PageTitle';
import UserPrompt from '@/components/UserPrompt';
import AiResponse from '@/components/AiResponse';
import PromptPreloader from '@/components/PromptPreloader';
// Custom hooks
import { usePromptPreloader } from '@/hooks/usePromptPreloader';

function ConversationError() {
  const error = useRouteError() as { code: string; message: string };

  return (
    <div className='grid grid-cols-1 justify-items-center content-center h-full'>
      <p className='text-displayMedium font-semibold'>{error.code}</p>
      <p
        className='text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant
        mt-2 mb-4'
      >
        {error.message}
      </p>
      <Link
        to='/'
        className='btn filled primary'
      >
        Create new conversation
        <div className='state-layer'></div>
      </Link>
    </div>
  );
}

export default ConversationError;
