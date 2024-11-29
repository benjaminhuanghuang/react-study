import { NavLink } from 'react-router-dom';

import Logo from './Logo';
import { IconButton, ExtendedFab } from './Button';

function Sidebar() {
  return (
    <>
      <div className='sidebar active'>
        <div className='sidebar-inner'>
          <div className='h-16 grid items-center px-4 mb-4'>
            <Logo classes='' />
          </div>
          <ExtendedFab
            href='/'
            text='New chat'
            classes=''
          />
          <div className=''>
            <p className=''>Recent</p>
            <nav>
              <div>
                <NavLink
                  to='/'
                  className='nav-link'
                  title=''
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
                />
              </div>
            </nav>
          </div>
          <div className=''>&copy; 2021 Phoenix. All rights reserved.</div>
        </div>
      </div>
      <div className={`overlay`}></div>
    </>
  );
}

export default Sidebar;
