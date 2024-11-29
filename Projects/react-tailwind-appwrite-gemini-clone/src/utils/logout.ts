import { account } from '../lib/appwrite';

const logout = async (navigate: any) => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.log(`Error logging out: ${error}`);
    return null;
  }
  return navigate('/');
};

export default logout;
