import { useNavigation, Link, useRouteError } from 'react-router-dom';
// Components
import { LinearProgress } from '@/components/Progress';

function RootError() {
  const error = useRouteError() as { status: string; message: string };
  const navigation = useNavigation();

  return (
    <>
      <div className='h-dvh grid grid-cols-1 justify-items-center content-center'>
        <p className='text-displayLarge'>{error.status}</p>
        <p
          className='text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant
        mt-1 mb-4'
        >
          We couldn&apos;t load the page you requested. {error.message}
        </p>
        <Link
          to='/'
          className='btn filled primary'
        >
          Back to home <div className='state-layer'></div>
        </Link>
      </div>
      {navigation.state === 'loading' && (
        <LinearProgress classes='fixed top-0 left-0 right-0' />
      )}
    </>
  );
}

export default RootError;
