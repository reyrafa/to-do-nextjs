import { api } from "./api";
type LoginProps = {
    email: string;
    password: string;
}
export async function Auth({email, password} : LoginProps){
    const response = await api({
        url: '/v1/login',
        options: {
            headers: {
               'Content-Type' : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                email, password
            })     
        }
    });
    return response;
}