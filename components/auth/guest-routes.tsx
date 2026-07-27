import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

export default function GuestRoutes({ children }: Props) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.replace('/');
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if(isAuthenticated){
        return null;
    }
    return children;

}