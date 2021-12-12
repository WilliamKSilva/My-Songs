import { ButtonHTMLAttributes } from "react";
import { DefaultButton } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    onClick: () => void;    
}

export function Button({ title, onClick } : Props) {        
    return (
       <DefaultButton onClick={onClick}>
           {title}
       </DefaultButton> 
    );
}