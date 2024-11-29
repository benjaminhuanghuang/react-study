import { redirect } from 'react-router-dom';

import { account } from '../../lib/appwrite';

const appLoader = async () => {
  const data: { user?: any } = {};
  try {
    data.user = await account.get();
  } catch (error) {
    console.log(`Error getting user session: ${error}`);
    return redirect('/login');
  }
  return data;
};

export default appLoader;
