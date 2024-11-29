// Node modules
import { Link, useNavigation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import { IconButton } from './Button';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { LinearProgress } from './Progress';

// Assets
import { logoLight, logoDark } from '@/assets/assets';

function TopAppBar() {
  // Provides navigation status (loading, idle, submitting, etc)
  const navigation = useNavigation();
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconButton
          icon='menu'
          size='md'
          title='Menu'
          classes = 'lg:hidden'
        />
        <Link
          to='/'
          className='min-w-max max-w-max h-[24px] lg:hidden'
        >
          <img
            src={logoLight}
            width={133}
            height={24}
            alt='phoenix logo'
            className='dark:hidden'
          />
          <img
            src={logoDark}
            width={133}
            height={24}
            alt='phoenix logo'
            className='hidden dark:block'
          />
        </Link>
      </div>
      <div className='menu-wrapper'>
        <IconButton>
          <Avatar name='codewithsadee' />
        </IconButton>
        <Menu>
          <MenuItem labelText='Log out'></MenuItem>
        </Menu>
      </div>
      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
}

export default TopAppBar;
