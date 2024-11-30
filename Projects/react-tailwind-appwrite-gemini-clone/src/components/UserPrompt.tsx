import { useRef, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
// Components
import Avatar from './Avatar';
import { IconButton } from './Button';

// Custom hooks
import useToggle from '@/hooks/useToggle';

interface UserPromptProps {
  text: string;
}

const UserPrompt = ({ text }: UserPromptProps) => {
  const { user } = useLoaderData();
  const [isExpanded, toggleExpanded] = useToggle();
  const textBoxRef = useRef<HTMLParagraphElement>(null);
  const [hasMoreContent, setHasMoreContent] = useState(false);

  // update hasMoreContent state when text changes
  useEffect(() => {
    if (textBoxRef.current) {
      setHasMoreContent(textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight);
    }
  }, [textBoxRef]);
  return (
    <div
      className='grid grid-cols-1 item-center gap-1 py-4 
       md:grid-cols-[max-content,minmax(0,1fr),max-content]
       md:gap-5'
    >
      <Avatar name={user.name} />
      <p
        className={`text-bodyLarge pt-5 whitespace-pre-wrap ${!isExpanded}?'line-clamp-4':''`}
      >
        {text}
      </p>
      {
        hasMoreContent && (
            <IconButton
            icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            onClick={toggleExpanded}
            title={isExpanded ? 'Collapse text' : 'Expand text'}
          />
        )
      }
    
    </div>
  );
};
export default UserPrompt;