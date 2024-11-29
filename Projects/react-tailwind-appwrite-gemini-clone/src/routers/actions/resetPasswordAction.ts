import { redirect } from 'react-router-dom';

import { account } from '../../lib/appwrite';

const resetPasswordAction = async ({ request }: any) => {
  const formData = await request.formData();
  const url = new URL(request.url);

  try {
    await account.updateRecovery(
        url.searchParams.get('userId') as string,
        url.searchParams.get('secret') as string,
        formData.get('password') as string,
    );
    return redirect('/');
  } catch (error) {
    console.log(`Error updating password: ${error}`);
    return {
      message: (error as Error).message,
    };
  }
};

export default resetPasswordAction;
