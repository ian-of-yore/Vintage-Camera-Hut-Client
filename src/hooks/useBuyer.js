import { useEffect, useState } from "react"

export const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://rangefinder-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email])

    return [isBuyer, isBuyerLoading]
}