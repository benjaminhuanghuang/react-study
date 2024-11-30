// Node modules
import {
  useNavigation,
  useNavigate,
  useLoaderData,
  useParams,
  useSubmit,
} from 'react-router-dom';
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
import deleteConversation from '@/utils/deleteConversation';

interface TopAppBarProps {
  toggleSidebar: () => void;
}
function TopAppBar({ toggleSidebar }: TopAppBarProps) {
  // Provides navigation status (loading, idle, submitting, etc)
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { conversations, user } = useLoaderData();
  const params = useParams();
  const submit = useSubmit();

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

      {params.conversationId && (
        <IconButton
          icon='delete'
          classes='ms-auto me-1 lg:hidden'
          onClick={() => {
            const { title } = conversations.documents.find(
              ({ $id }: any) => $id === params.conversationId,
            );
            deleteConversation({
              id: params.conversationId,
              title,
              submit
            });
          }}
        ></IconButton>
      )}

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
