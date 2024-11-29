
// Node modules
import { useEffect } from 'react';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Custom modules
import { logoDark, logoLight, banner } from '../assets/assets';
// Components
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import {Button}  from '../components/Button';
import { CircleProgress, LinearProgress } from '@/components/Progress';
import { useSnackbar } from '@/hooks/useSnackbar';

function ResetLink() {
  // get navigation status
  const navigation = useNavigation();
  // get error data from submission using useActionData
  const actionData = useActionData();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if(actionData) {
        showSnackbar({
            message: actionData.message,
            type: actionData.ok ? 'info' : 'error',
            timeOut: 8000
        });
    }
    
  }, [actionData, showSnackbar]);

  return (
    <>
      <PageTitle title='Reset Password' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link
            to='/'
            className='max-w-max mb-auto mx-auto lg:mx-0'
          >
            <img
              src={logoLight}
              alt='phoenix logo'
              width={133}
              height={24}
              className='dark:hidden'
            />
            <img
              src={logoDark}
              alt='phoenix logo'
              width={133}
              height={24}
              className='hidden dark:block'
            />
          </Link>
          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Forget your password?
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
             Enter your email to reset your password.
            </p>
            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                helperText='The verification link sent to your email will be valid for 1 hour.' 
                required={true}
                autoFocus={true}
              />
              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
              
                {navigation.state === 'submitting'
                  ? <CircleProgress size='small' />
                  : 'Get link'}
              </Button>
            </Form>
          </div>
          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2021 Phoenix. All rights reserved.
          </p>
        </div>
        <div className='hidden img-box lg:block lg:relative lg:rounded-large'>
          <img
            src={banner}
            alt=''
            className='img-cover'
          />
          <p
            className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface dark:text-dark-onSurface dark-shadow-sm
          2xl:text-[72px]'
          >
            Chat with Phoenix to supercharge your ideas.
          </p>
        </div>
      </div>
      <AnimatePresence>
        {navigation.state === 'loading' && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
}

export default ResetLink;
