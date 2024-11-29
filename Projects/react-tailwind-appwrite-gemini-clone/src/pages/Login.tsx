// Node modules
import { useEffect } from 'react';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Custom modules
import { banner } from '../assets/assets';
// Components
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import Logo from '@/components/Logo';
import { Button } from '../components/Button';
import { CircleProgress, LinearProgress } from '@/components/Progress';
import { useSnackbar } from '@/hooks/useSnackbar';

function Login() {
  // get navigation status
  const navigation = useNavigation();
  // Get error data from submission
  const error = useActionData();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    //show error message
    if (error?.message) {
      showSnackbar({
        message: error.message,
        type: 'error',
      });
    }
  }, [error, showSnackbar]);

  return (
    <>
      <PageTitle title='Create an account' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Logo classes='mb-auto mx-auto lg:mx-0' />
          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Welcome Back to Phoenix
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Enter your Phoenix account details.
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
                required={true}
                autoFocus={true}
              />
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                required={true}
              />
              <div className='text-right'>
                <Link
                  to='/reset-link'
                  className='link text-labelLarge inline-block'
                >
                  Forget password?
                </Link>
              </div>
              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                {navigation.state === 'submitting' ? (
                  <CircleProgress size='small' />
                ) : (
                  'Sign In'
                )}
              </Button>
            </Form>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
              Don't have an account?
              <Link
                to='/register'
                className='link text-labelLarge inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Create an account
              </Link>
            </p>
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

export default Login;
