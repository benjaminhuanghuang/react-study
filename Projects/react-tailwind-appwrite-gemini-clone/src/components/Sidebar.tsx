import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
// Components
import Logo from './Logo';
import { IconButton, ExtendedFab } from './Button';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
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
            classes=''
            onClick={toggleSidebar}
          />
          <div className='overflow-y-auto -me-2 pe-1'>
            <p className='text-titleSmall h-9 grid-items-center px-4'>Recent</p>
            <nav>
              <div className='relative group'>
                <NavLink
                  to='new-chat'
                  className='nav-link'
                  title=''
                  onClick={toggleSidebar}
                >
                  <span className='material-symbols-rounded icon-small'>
                    chat-bubble
                  </span>
                  <span className='truncate'>New conversation</span>
                  <div className='state-layer'></div>
                </NavLink>
                <IconButton
                  icon='delete'
                  size='sm'
                  title='Delete'
                  classes='absolute right-1.5 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 group:focus-within:opacity-100'
                />
              </div>
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
