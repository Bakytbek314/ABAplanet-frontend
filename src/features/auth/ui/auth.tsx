"use client";
import "primereact/resources/themes/lara-light-green/theme.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { auth } from "@/features/auth/api/auth";
import Button from "@/shared/ui/button/button";
import TextType from "@/shared/ui/textType/textType";
import styles from "./auth.module.scss";

interface DecodedToken {
  role: string;
  specialistId: boolean | number;
  patientId: boolean | number;
}

const Auth = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await auth(formData);

    if (res) {
      try {
        const decoded: DecodedToken = jwtDecode(res.accessToken);

        if (decoded.role === "ADMIN") {
          router.push("/admin");
        } else if (decoded.role === "SPECIALIST") {
          router.push("/account");
        } else if (decoded.role === "PATIENT") {
          router.push("/account");
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Ошибка при декодировании токена:", error);
        setError("Ошибка авторизации. Попробуйте ещё раз.");
      }
    } else {
      setError("Неправильный логин или пароль");
    }

    setFormData({
      login: "",
      password: "",
    });
  };
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextType variant="bigP" align="center" color="grey">
          Вход в личный кабинет
        </TextType>
        <InputText
          type="text"
          placeholder="Логин"
          value={formData.login}
          onChange={(e) => setFormData({ ...formData, login: e.target.value })}
          className="p-2"
          required
          invalid={error.length > 0}
        />
        <InputText
          type="password"
          placeholder="Пороль"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="p-2"
          required
          invalid={error.length > 0}
        />
        {error && (
          <Message
            severity="error"
            text={error}
            className="p-2 justify-content-start gap-1"
          />
        )}
        <Button color="green" type="submit">
          Войти
        </Button>
      </form>
    </main>
  );
};

export default Auth;
