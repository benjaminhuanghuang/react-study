// Components
import PageTitle from '@/components/PageTitle';
import TopAppBar
 from './components/TopAppBar';
function App() {
  return (
    <>
      <PageTitle title='Phoenix - chat to supercharge your ideas' />
      <div className=''>
        {/* Sidebar */}

        <div className=''>
          {/* Top app bar */}
          <TopAppBar />
          
          {/* Main content */}
          <div className=''>
            <div className=''></div>
          </div>
        </div>

        {/* Prompt field */}
        <div className=''>
          <p className=''>
            Phoenix may display inaccurate info, double check its responses.
            <a
              href=''
              className=''
            >
              Your privacy & Gemini Apps{' '}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
