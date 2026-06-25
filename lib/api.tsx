type ApiOptions = {
    url: string;
    token?: string,
    options?: RequestInit
};

export async function api({
    url,
    token,
    options = {} }: ApiOptions) {
    return fetch(`${process.env.NEXT_PUBLIC_TO_DO_API_URL}${url}`, {
        ...options,
        headers: {
            Accept: 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
            ...options.headers,
        }
    })
}