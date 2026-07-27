"use client"
import GuestRoutes from "@/components/auth/guest-routes";
import InputField from "@/components/ui/input-field";
import Label from "@/components/ui/label";
import { api } from "@/lib/api";
import { useState } from "react";

type ValidationErrors = Record<string, string[]>

export default function Register() {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [successMessage, setSuccessMessage] = useState("");


    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            const response = await api({
                url: '/v1/register',
                options: {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        password_confirmation: confirmPassword
                    })
                }
            });
            const data = await response.json();
            if (!data.success) {
                const errors = data['errors'];
                setErrors(errors);
                return;
            }
            resetForm();
            setSuccessMessage(data.message);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
    }

    return (
        <GuestRoutes>
            <div className="max-w-2xl mx-auto mt-20">
                <div className="text-center mb-2 text-2xl tracking-wider">
                    Registration Form
                </div>
                <div>
                    {
                        successMessage && (
                            <div className="bg-blue-500 text-white p-3 mb-3 rounded">
                                {successMessage}
                            </div>
                        )
                    }
                </div>
                <form onSubmit={handleRegister}>
                    {Object.keys(errors).length > 0 &&
                        <div className="mb-3">
                            <div className="text-red-600">Errors</div>
                            <div>
                                <ul className="list-disc list-inside">
                                    {
                                        Object.entries(errors).map(([field, messages]) => (
                                            <li key={field} className="text-red-500 text-sm">{
                                                messages.map((message, index) => (
                                                    <span key={index}>{message}</span>
                                                ))
                                            }</li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    }
                    <div className="bg-green-100 p-10 rounded shadow grid md:grid-cols-2 items-center gap-4">
                        <div>
                            <Label>Email <span className="text-red-500">*</span></Label>
                            <InputField type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                        </div>
                        <div>
                            <Label>Name <span className="text-red-500">*</span></Label>
                            <InputField type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required={true} />
                        </div>
                        <div>
                            <Label>Password <span className="text-red-500">*</span></Label>
                            <div className="relative">
                                <InputField type={showPassword ? 'text' : 'password'} name="password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <button type="button" className="text-xs cursor-pointer text-blue-500" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? 'Hide Password' : 'Show Password'}
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Label>Confirm Password <span className="text-red-500">*</span></Label>
                            <div className="relative">
                                <InputField type={showConfirmPassword ? 'text' : 'password'} name="password_confirmation" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required={true} />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <button type="button" className="text-xs cursor-pointer text-blue-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? 'Hide Password' : 'Show Password'}
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="mt-3">
                            <button type="submit"
                                className={`${loading ? "bg-blue-300 cursor-not-allowed" : " bg-blue-500 cursor-pointer"} px-3 py-2 rounded w-52 text-white text-sm`}
                                disabled={loading}
                            >
                                {loading ? 'Loading' : 'Submit'}
                            </button>
                            <div className="text-sm mt-2 text-gray-700">
                                <span>Already Has Account?</span>
                                <a href="/login" className="underline ms-1">login</a>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </GuestRoutes>
    )
}