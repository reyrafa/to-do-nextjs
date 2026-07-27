"use client"
import GuestRoutes from "@/components/auth/guest-routes";
import LoginForm from "@/components/auth/login-form";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();
    const { isAuthenticated } = useAuth();
    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/');
        }
    }, [isAuthenticated, router]);
    if (isAuthenticated) {
        return null;
    }
    return (
        <GuestRoutes>
            <LoginForm />
        </GuestRoutes>

    )
}
