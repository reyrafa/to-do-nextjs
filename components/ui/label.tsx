import { ReactNode } from "react"
type Props = {
    children: ReactNode;
    className?: string;
    Htmlfor?: string;
}

export default function Label({ children, className, Htmlfor }: Props) {

    return (
        <label className={`${className} text-sm`} htmlFor={Htmlfor}>{children}</label>
    )
}