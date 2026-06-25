"use client";

type ButtonProps ={
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Button({
    children,
    onClick
}: ButtonProps){
    return(
        <button onClick={onClick}
        className="rounded bg-blue-500"
        >
            {children}
        </button>
    )
}
