import { api } from "@/shared/lib/api";
import { parseCookies } from "nookies";

export const addFinance = async (data: {}, isPayment: boolean) => {
  const endPoint = isPayment ? "payment" : "payment/debt";

  try {
    const cookies = parseCookies();
    const token = cookies.token;

    await api(`${endPoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
