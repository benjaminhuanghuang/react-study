import { NavLink, useLoaderData, useSubmit, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
// Components
import Logo from './Logo';
import { IconButton, ExtendedFab } from './Button';
//
import deleteConversation from '@/utils/deleteConversation';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  const {
    conversations: { documents: conversationData },
  } = useLoaderData() || {};

  const { conversationId } = useParams();

  const submit = useSubmit();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'ease' }}
        className={`sidebar ${isSidebarOpen}? active:''`}
      >
        <div className='sidebar-inner'>
          <div className='h-16 grid items-center px-4 mb-4'>
            <Logo classes='' />
          </div>
          <ExtendedFab
            href='/'
            text='New chat'
            classes='mb-4'
            onClick={toggleSidebar}
            disabled={!conversationId}
          />
          <div className='overflow-y-auto -me-2 pe-1'>
            <p className='text-titleSmall h-9 grid-items-center px-4'>Recent</p>
            <nav>
              {conversationData?.map((item: any) => (
                <div
                  key={item.$id}
                  className='relative group'
                >
                  <NavLink
                    to={item.$id}
                    className='nav-link'
                    title={item.title}
                    onClick={toggleSidebar}
                  >
                    <span className='material-symbols-rounded icon-small'>
                      chat-bubble
                    </span>
                    <span className='truncate'>{item.title}</span>
                    <div className='state-layer'></div>
                  </NavLink>
                  <IconButton
                    icon='delete'
                    size='sm'
                    title='Delete'
                    classes='absolute right-1.5 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group:focus-within:opacity-100'
                    onClick={() => {
                      deleteConversation({
                        id: item.$id,
                        title: item.title,
                        submit,
                      });
                    }}
                  />
                </div>
              ))}
            </nav>
          </div>
          <div
            className='mt-4 h-14 px-4 grid items-center text-labelLarge 
              text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant 
              border-t
            border-light-surfaceContainerHigh dark:border-dark-surfaceContainerHigh
            truncate'
          >
            &copy; 2021 Phoenix. All rights reserved.
          </div>
        </div>
      </motion.div>
      <div
        className={`overlay ${isSidebarOpen} ? 'active':''`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default Sidebar;
