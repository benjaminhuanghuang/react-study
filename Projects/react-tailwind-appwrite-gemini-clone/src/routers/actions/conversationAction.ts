import { redirect } from 'react-router-dom';
// Custom modules
import { database } from '../../lib/appwrite';
import { getAiResponse } from '../../api/googleAI';
import generateID from '../../utils/genertateID';

const conversationAction = async ({ request, params }: any) => {
  const { conversationId } = request.params;
  const fromData = await request.formData();
  const userPrompt = fromData.get('user_prompt') as string;
  let chatHistory = [];
  let aiResponse = '';

  try {
    const { chats } = await database.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      generateID(),
      {
        conversationId
      },
    );
    console.log(chats); // for debugging
    chatHistory = chats.map(async ({ user_prompt, ai_response }: any) => {
      return { user_prompt, ai_response };
    });
  } catch (error) {
    console.log(`Error in getting chat: ${error}`);
  }

  try {
    aiResponse = (await getAiResponse(userPrompt, chatHistory)) || '';
  } catch (error) {
    console.log(`Error in getting gemini response: ${error}`);
  }
  try {
    await database.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      generateID(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        conversation: conversationId,
      },
    );
  } catch (error) {
    console.log(`Error in sorting chat: ${error}`);
  }

  return null;
};

export default conversationAction;
