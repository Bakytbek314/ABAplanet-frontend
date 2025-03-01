"use client";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import Button from "@/shared/ui/button/button";
import { auth } from "@/features/auth/api/auth";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import styles from "./auth.module.scss";
import TextType from "@/shared/ui/textType/textType";

interface DecodedToken {
  role: string;
}

const Auth = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await auth(formData);

    if (res) {
      const decoded: DecodedToken = jwtDecode(res.accessToken);

      if (decoded.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }

    setFormData({
      login: "",
      password: "",
    });
  };
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form} >
          <TextType variant="bigP" align="center" color="grey">Вход в личный кабинет</TextType>
          <InputText
            type="text"
            placeholder="Логин"
            value={formData.login}
            onChange={(e) => setFormData({...formData, login: e.target.value})}
            className="p-2"
            required
          />
          <InputText
            type="password"
            placeholder="Пороль"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="p-2"
            required
          />
          <Button color="green" type="submit">Войти</Button>
      </form>
    </main>
  );
};

export default Auth;
