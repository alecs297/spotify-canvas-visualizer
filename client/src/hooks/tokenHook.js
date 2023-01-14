import { useEffect } from "react";

export function tokenHook(publicToken, setPublicToken) {

    useEffect(() => {
        setPublicToken(localStorage.getItem('publicToken') || import.meta.env.VITE_CLIENT_ID)
    }, [])

    useEffect(() => {
        if (publicToken) localStorage.setItem("publicToken", publicToken)
    }, [publicToken, setPublicToken])
}
