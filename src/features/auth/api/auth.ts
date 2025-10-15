import { setCookie } from "nookies";
import { api } from "../../../shared/lib/api"

interface Res {
    accessToken: string
}

export const auth = async (data: {}): Promise<Res | null> => {
    try {
        const res: Res = await api(`auth/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        setCookie(null, "token", res.accessToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });

        return res;
    } catch (error) {
        console.error("Ошибка авторизации:", error);
        return null;
    }
}