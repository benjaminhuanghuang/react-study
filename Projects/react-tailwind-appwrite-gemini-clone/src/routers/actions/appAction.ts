// Node modules
import { getAiResponse, getConversationTitle } from '@/api/googleAI';
import { account, database } from '@/lib/appwrite';
import generateID from '@/utils/genertateID';
import { redirect } from 'react-router-dom';

const userPromptAction = async (formData: any) => {
  const userPrompt = formData.get('user_prompt') as string;
  const user = await account.get();
  const conversationTitle = await getConversationTitle(userPrompt);
  let conversation = null;

  try {
    await database.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      generateID(),
      {
        title: conversationTitle,
        userId: user.$id,
      },
    );
  } catch (error) {
    console.log(`Error in creating conversation: ${error}`);
  }

  const aiResponse = await getAiResponse(userPrompt);
  try {
    // Create  a new chat in the chats collection
    await database.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      generateID(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        conversation: conversation!.$id,
      },
    );

  } catch (error) {
    console.log(`Error in creating chat: ${error}`);
  }

  return redirect(`/${conversation!.$id}`);
};

const appAction = async ({ request }: any) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type') as string;

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
};

export default appAction;
