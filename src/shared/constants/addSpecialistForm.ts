import { Specialization } from "../types/fetchData.types";

export const addSpecialistForm = [
    { name: "firstName", placeholder: "Имя", icon: "pi pi-user" },
    { name: "lastName", placeholder: "Фамилия", icon: "pi pi-user" },
    { name: "login", placeholder: "Придумайте логин", icon: "pi pi-lock" },
    { name: "password", placeholder: "Придумайте пароль", icon: "pi pi-key", type: "text" },
    { name: "phoneNumber", placeholder: "Номер телефона", icon: "pi pi-phone" }
];

export const specialization: Specialization[] = [
    { name: "ABA-специалист" },
    { name: "СИ-специалист" },
    { name: "Логопед" },
  ];