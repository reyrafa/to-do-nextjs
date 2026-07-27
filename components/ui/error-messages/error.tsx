import { ReactNode } from "react"

type ErrorProps = {
        children: ReactNode;
        className?: string;
    }

export default function Error({children, className}: ErrorProps){
    
    return(
        <span className={`${className} text-xs text-red-400 mt-1`}>{children}</span>
    )
}