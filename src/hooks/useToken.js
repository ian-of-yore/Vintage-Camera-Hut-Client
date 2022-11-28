import { useEffect, useState } from "react"

export const useToken = (email) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://rangefinder-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('jwt-token', data.accessToken);
                        setToken(data.accessToken);
                        console.log(data)
                    }
                })
        }
    }, [email]);

    return [token];
}