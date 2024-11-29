import { redirect } from 'react-router-dom';

import { account } from '../../lib/appwrite';

const resetPasswordLoader = async ({ request }: any) => {
  const url = new URL(request.url);
  try {
    await account.get();
    return redirect('/');
  } catch (error) {
    console.log(`Error getting user session: ${error}`);
  }

  if (!url.searchParams.has('userId') || !url.searchParams.has('secret')) {
    return redirect('/reset-link');
  }

  return null;
};

export default resetPasswordLoader;
