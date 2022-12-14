import { useEffect, useState } from "react"

export const useSellerVerified = (email) => {
    const [isSellerVerified, setIsSellerVerified] = useState(false);

    useEffect(() => {
        if (email) {
            fetch(`https://rangefinder-server.vercel.app/sellers/verified/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSellerVerified(data.isVerified);
                })
        }
    }, [email]);

    return [isSellerVerified];
}