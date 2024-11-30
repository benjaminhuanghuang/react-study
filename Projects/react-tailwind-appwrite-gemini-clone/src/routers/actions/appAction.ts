// Node modules
import { getConversationTitle } from '@/api/googleAI';
import { account, database} from '@/lib/appwrite';
import generateID from '@/utils/genertateID';

const userPromptAction = async (formData: any) => {
    const userPrompt = formData.get('user_prompt') as string;
    const user = await account.get();
    const conversationTitle = await getConversationTitle(userPrompt);

    try{
      await database.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'conversations',
        generateID(),
        {
          title: conversationTitle,
          userId: user.$id,
        }
      );
    }
    catch (error) {
      console.log(`Error in creating conversation: ${error}`);
    }

}


const appAction = async ({ request }: any) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type') as string;

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
};

export default appAction;
