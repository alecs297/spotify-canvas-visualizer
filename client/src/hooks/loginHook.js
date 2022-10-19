import { useEffect } from "react";
import { login } from "../utils/auth";

export function loginHook(setAuth) {
    useEffect(() => {
        let params = new URLSearchParams(window.location.hash.slice(1))
        let token = sessionStorage.getItem("token") ?? params.get("access_token")

        if (token === "null") token = null;

        setAuth(token)
        login(token)
    }, [])
}
