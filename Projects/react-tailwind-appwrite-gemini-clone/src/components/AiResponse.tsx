import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
// Components
import { IconButton } from './Button';
import toTitleCase from '@/utils/toTitleCase';
import { useSnackbar } from '@/hooks/useSnackbar';

// Assets
import { iconLogo } from '@/assets/assets';

interface AiResponseProps {
  aiResponse: string;
  children?: React.ReactNode;
}
const AiResponse = ({ aiResponse, children }: AiResponseProps) => {
  const [codeTheme, setCodeTheme] = useState<any>(null);
  const { showSnackbar, hideSnackbar } = useSnackbar();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setCodeTheme(mediaQuery.matches ? hopscotch : coy);
    // event listener for theme change
    const themeListener = mediaQuery.addEventListener('change', (e) => {
      setCodeTheme(e.matches ? hopscotch : coy);
    });

    // cleanup function when component unmounts
    return () => {
      mediaQuery.removeEventListener('change', themeListener as any);
    };
  }, [codeTheme]);

  const handleCopy = useCallback(
    async (text: string) => {
      hideSnackbar();
      try {
        await navigator.clipboard.writeText(text);
        showSnackbar({
          message: 'Code copied to clipboard',
          type: 'success',
        });
        console.log('Code copied to clipboard');
      } catch (error) {
        showSnackbar({
          message: 'Failed to copy code to clipboard',
          type: 'error',
        });
        console.error('Failed to copy code to clipboard', error);
      }
    },
    [showSnackbar, hideSnackbar],
  );

  const code = ({ children, className, ...rest }: any) => {
    const match = className?.match(/language-(\w+)/);

    return match ? (
      <>
        <div className='code-block'>
          <div className='p-4 pb-0 font-sans'>{toTitleCase(match[1])}</div>
          <SyntaxHighlighter
            {...rest}
            PreTag='div'
            language={match[0]}
            style={codeTheme}
            customStyle={{
              marginBlock: '0',
              padding: '2px',
            }}
            codeTagProps={{
              style: {
                padding: '14px',
                fontWeight: '600',
              },
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>
        <div
          className='bg-light-surfaceContainer dark:bg-dark-surfaceContainer 
            rounded-t-extraSmall rounded-b-medium flex justify-between items-center h-11
            font-sans text-bodyMedium ps-4 pe-2'
        >
          <p>
            <a
              href='https://gemini.google.com/faq#coding'
              className='link'
              target='_blank'
            >
              With caution
            </a>
          </p>
          <IconButton
            icon='content_copy'
            size='small'
            title='Copy code'
            onClick={handleCopy.bind(null, children)}
          ></IconButton>
        </div>
      </>
    ) : (
      <code className={className}>{children}</code>
    );
  };

  return (
    <div
      className='grid grid-cols-1 items-start gap-1 py-4 
    md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'
    >
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src={iconLogo}
          alt='Phoenix logo'
          width={32}
          height={32}
        />
      </figure>
      {children}
      {aiResponse && (
        <div className='markdown-content'>
          <Markdown remarkPlugins={[remarkGfm]}>{aiResponse}</Markdown>
        </div>
      )}
    </div>
  );
};

export default AiResponse;
