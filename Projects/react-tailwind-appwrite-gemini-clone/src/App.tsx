// Node modules
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  Outlet,
  useParams,
  useNavigation,
  useActionData,
} from 'react-router-dom';

// Components
import PageTitle from '@/components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import Greetings from './pages/Greetings';
import PromptField from './components/PromptField';

// Custom hooks
import useToggle from './hooks/useToggle';
import { useSnackbar } from './hooks/useSnackbar';
import { usePromptPreloader } from './hooks/usePromptPreloader';

function App() {
  // Get the URL params
  const params = useParams();
  const [isSidebarOpen, toggleSidebar] = useToggle() as [boolean, () => void];
  const navigation = useNavigation();
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  const { showSnackbar } = useSnackbar();
  const { promptPreloaderValue } = usePromptPreloader();
  const actionData = useActionData();
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatHistory = chatHistoryRef.current as HTMLDivElement;
    if (promptPreloaderValue) {
      chatHistory.scroll({
        top: chatHistory.scrollHeight - chatHistory.clientHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistoryRef, promptPreloaderValue]);

  useEffect(() => {
    if (actionData?.conversationTitle) {
      showSnackbar({
        message: `Delete "${actionData.conversationTitle}" conversation`,
        type: 'success',
      });
    }
  }, [actionData, showSnackbar]);
  return (
    <>
      <PageTitle title='Phoenix - chat to supercharge your ideas' />
      <div className='lg:grid lg:grid-cols-[320px, 1fr]'>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        ></Sidebar>
        <div className='h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]'>
          {/* Top app bar */}
          <TopAppBar toggleSidebar={toggleSidebar} />

          {/* Main content */}
          <div className='px-5 pb-5 flex flex-col overflow-y-auto'>
            <div className='max-w-[840px] w-full mx-auto-grow'>
              {isNormalLoad ? null : params.conversationId ? (
                <Outlet />
              ) : (
                <Greetings />
              )}
            </div>
          </div>
        </div>

        {/* Prompt field */}
        <div className='bg-light-background dark:bg-dark-background'>
          <div className='max-w-[870px] px-5 w-full mx-auto'>
            <PromptField />
            <motion.p
              initial={{ opacity: 0, translateY: '-4px' }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }}
              className='text-bodySmall text-center
            text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant p-3'
            >
              Phoenix may display inaccurate info, double check its responses.
              <a
                href='https://supports.google.com/gemini?/p=privacy_notice'
                target='_blank'
                className='inline underline ms-1'
              >
                Your privacy & Gemini Apps{' '}
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
