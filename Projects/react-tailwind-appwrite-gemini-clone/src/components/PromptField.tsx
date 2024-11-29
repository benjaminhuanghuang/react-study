// Node modules
import { useCallback, useRef, useState } from 'react';
import { useSubmit, useNavigation } from 'react-router-dom';
import { motion } from 'framer-motion';
// Components
import { IconButton } from './Button';
import { input } from 'framer-motion/client';

function PromptField() {
  const inputField = useRef<HTMLDivElement>(null);
  const inputFieldContainer = useRef<HTMLDivElement>(null);
  const [placeholderShown, setPlaceholderShown] = useState(true);
  const [isMultiline, setIsMultiline] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const submit = useSubmit();
  const navigation = useNavigation();

  const handleInputChange = useCallback(() => {
    if (inputField.current?.innerText === '\n') {
      inputField.current.innerText = '';
    }
    setPlaceholderShown(inputField.current?.innerText?.length === 0);
    setIsMultiline(inputFieldContainer.current?.clientHeight! > 64);
    setInputValue(inputField.current?.innerText.trim()!);
  }, []);

  // Move the cursor to the end of the text
  const moveCursorToEnd = useCallback(() => {
    const editableElem = inputField.current;
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(editableElem!);
    range.collapse(false);
    selection!.removeAllRanges();
    selection!.addRange(range);
  }, []);

  // Handle the paste text
  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      inputField.current!.innerText! += e.clipboardData!.getData('text');
      handleInputChange();
      moveCursorToEnd();
    },
    [handleInputChange, moveCursorToEnd],
  );

  // Handle the submit
  const handleSubmit = useCallback(() => {
    // Prevent submitting empty messages
    if (!inputValue || navigation.state === 'submitting') return;
    submit({
      use_prompt: inputValue,
      request_type: 'user_prompt'
    });

    inputField.current!.innerText = '';
    handleInputChange();
  }, [handleInputChange, inputValue, navigation.state]);

  // Define the motion variant
  const promptFieldVariant = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.4,
        delay: 0.4,
        ease: [0.05, 0.7, 0.1, 1],
      },
    },
  };

  const promptFieldChildTransition = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={`prompt-field-container ${isMultiline ? 'rounded-large' : ''}`}
      variants={promptFieldVariant}
      initial='hidden'
      animate='visible'
      ref={inputFieldContainer}
    >
      <motion.div
        className={`prompt-field ${placeholderShown ? '' : 'after:hidden'}`}
        contentEditable={true}
        role='textbox'
        aria-multiline={true}
        aria-label='Type your message here'
        data-placeholder='Type your message here'
        variants={promptFieldChildTransition}
        ref={inputField}
        onInput={handleInputChange}
        onPaste={handlePaste}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      >
        <IconButton
          icon='send'
          title='Submit'
          size='Large'
          classes='ms-auto'
          variants={promptFieldChildTransition}
          onClick={handleSubmit}
        ></IconButton>
        <div className='state_layer'></div>
      </motion.div>
    </motion.div>
  );
}

export default PromptField;
