import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';

const usePromptPreloader = (delay = 1000) => {
  const navigation = useNavigation();
  const [promptPreloaderValue, setPromptPreloaderValue] = useState('');
  
  useEffect(() => {
    if (navigation.formData) {
      setPromptPreloaderValue(navigation.formData.get('user_prompt') as string);
    } else {
      setPromptPreloaderValue(promptPreloaderValue);
    }
  }, [navigation]);

  return { promptPreloaderValue };
};

export { usePromptPreloader };
