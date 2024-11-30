import { redirect } from 'react-router-dom';
import { Query } from 'appwrite';

import { account, database } from '../../lib/appwrite';

const appLoader = async () => {
  const data: { user?: any; conversation?: any } = {};
  try {
    data.user = await account.get();
  } catch (error) {
    console.log(`Error getting user session: ${error}`);
    return redirect('/login');
  }

  try {
    data.conversation = await database.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      [
        Query.select(['$id', 'title']),
        Query.orderDesc('$createdAt'),
        Query.equal('user_id', data.user.$id),
      ],
      
    );
  } catch (error) {
    console.log(`Error in getting conversations: ${error}`);
  }
  return data;
};

export default appLoader;
