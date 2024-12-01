import React from 'react'

interface ButtonProps {
    label?:string;
    href?:string;
    target?:string;
    icon?:string;
    classes?:string;
}
const ButtonPrimary = ({href, target, label, icon, classes} : ButtonProps) => {
 if(href){
    return (
        <a href=""></a>
    )
 }
 else {
    return(
        <button></button>
    )
 }
}


export {
    ButtonPrimary
}