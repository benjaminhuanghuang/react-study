import { redirect } from 'react-router-dom';

import { account, database } from '../../lib/appwrite';

const conversationLoader = async ({ params }: any) => {
  const { conversationId } = params;
  const data: { user?: any; conversation?: any } = {};

  try {
    data.user = await account.get();
  } catch (error) {
    console.log(`Error getting user session: ${error}`);
    return redirect('/login');
  }

  try{
    data.conversation = await database.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      conversationId,
    );
  } catch (error) {
    console.log(`Error getting conversation data: ${error}`);
    throw error;
  }
  return data;
};

export default conversationLoader;
