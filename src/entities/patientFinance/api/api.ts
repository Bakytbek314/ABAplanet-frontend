import { api } from "@/shared/lib/api";

export const addFinance = async (data: {}, isPayment: boolean) => {
  const endPoint = isPayment ? "payment" : "payment/debt";

  try {
    await api(`${endPoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    });
  } catch (error) {
    console.error(error);
  }
};
