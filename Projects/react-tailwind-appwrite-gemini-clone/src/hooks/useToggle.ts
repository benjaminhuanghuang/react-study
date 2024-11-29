// Node modules
import {useState, useCallback} from 'react';

//
const useToggle = ()=>{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = useCallback(()=>{
        setIsOpen((prevState)=> !prevState);
    },[]);

    return [isOpen, toggle];
}


export default useToggle;  