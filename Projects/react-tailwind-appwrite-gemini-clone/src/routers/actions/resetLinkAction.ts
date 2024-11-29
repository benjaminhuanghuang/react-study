 
import {account    } from '../../lib/appwrite';


 const resetLinkAction = async ({ request }: any) => {
    const formData = await request.formData();

    const email = formData.get('email') as string;
    try{
        await account.createRecovery(email, `${location.origin}/reset-password`);
        return {
            ok: true,
            message: 'You will receive an email with a link to reset your password',
        };
    }catch(error){
        console.log(`Error creating email session: ${error}`); 
        return {
            ok: false,
            message: (error as Error).message,
        };  
    }
 };


 export default resetLinkAction;