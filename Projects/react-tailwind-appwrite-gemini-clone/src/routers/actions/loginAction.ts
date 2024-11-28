import { redirect } from 'react-router-dom';
// Custom modules
import { account } from '../../lib/appwrite';
import { m } from 'framer-motion';

const loginAction = async ({ request }: any) => {
  const formData = await request.formData();
  try {
    await account.createEmailPasswordSession(
      formData.get('email') as string,
      formData.get('password') as string,
    );

    return redirect('/');
  } catch (error) {
    return {
        message: (error as Error).message,
    }
  }
};


export default loginAction;