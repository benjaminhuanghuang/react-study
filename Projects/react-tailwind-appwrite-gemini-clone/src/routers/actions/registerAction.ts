// Node modules
import {redirect} from 'react-router-dom';
// Custom modules
import { account } from '../../lib/appwrite';
import generateID from '../../utils/genertateID';

const registerAction = async ({ request }: any) => {
  const formData = await request.formData();
  // console.dir(formData);
  try {
    await account.create(
      generateID(),
      formData.get('email') as string,
      formData.get('password') as string,
      formData.get('name') as string,
    );
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    }
    return {
      message: 'An unknown error occurred',
    };
  }
  try {
    await account.createSession(
      formData.get('email') as string,
      formData.get('password') as string,
    );
  } catch (error) {
    console.log(`Error creating email session: ${error}`); 
    return redirect('/login');
  }

  return redirect('/');
};

export default registerAction;
