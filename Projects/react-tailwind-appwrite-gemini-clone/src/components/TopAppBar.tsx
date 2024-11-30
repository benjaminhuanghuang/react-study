// Node modules
import { useNavigation, useNavigate, useLoaderData } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import { IconButton } from './Button';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Logo from './Logo';
import { LinearProgress } from './Progress';
import useToggle from '@/hooks/useToggle';
import logout from '@/utils/logout';

interface TopAppBarProps {
  toggleSidebar: () => void;
}
function TopAppBar({ toggleSidebar }: TopAppBarProps) {
  // Provides navigation status (loading, idle, submitting, etc)
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { user } = useLoaderData();

  const [showMenu, setShowMenu] = useToggle();

  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconButton
          icon='menu'
          size='md'
          title='Menu'
          classes='lg:hidden'
          onClick={toggleSidebar}
        />
        <Logo classes='lg:hidden' />
      </div>
      <div className='menu-wrapper'>
        <IconButton onClick={setShowMenu}>
          <Avatar name={user.name} />
        </IconButton>
        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItem
            labelText='Log out'
            onClick={() => logout(navigate)}
          ></MenuItem>
        </Menu>
      </div>
      <AnimatePresence>
        {isNormalLoad && (
          <LinearProgress classes='absolute top-full left-0 right-0 z-10' />
        )}
      </AnimatePresence>
    </header>
  );
}

export default TopAppBar;
