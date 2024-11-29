import {Link} from 'react-router-dom';
// Assets
import {logoLight, logoDark} from '@/assets/assets';

interface LogoProps {
    classes?: string;
}
const Logo = ({classes=''}: LogoProps) =>{
    return (
        <Link
            to='/'
            className={`min-w-max max-w-max h-[24px] ${classes}`}
        >
            <img
                src={logoLight}
                width={133}
                height={24}
                alt='phoenix logo'
                className='dark:hidden'
            />
            <img
                src={logoDark}
                width={133}
                height={24}
                alt='phoenix logo'
                className='hidden dark:block'
            />
        </Link>
    )
}

export default Logo;